---
schema: wang-person/v1
id: p_ymucX7NT8ppRqzhncqq8Wc
status: active
merged_into: null
display_name: 王鼎
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fYkVGq56XLTP7iz9XKvYx8
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qFK5VfKaHKjTioFBZ8pUW1
          claim_id: c_fYkVGq56XLTP7iz9XKvYx8
          source_id: s_2J6JwQfve8ET6tDjC5FvWR
          stance: supports
          locator: CBDB:335738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335738）
          source: &a1
            id: s_2J6JwQfve8ET6tDjC5FvWR
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 335738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335738&o=json
            external_identifier: CBDB:335738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1xPAumCKs95y3z9TbkuEuv
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k6QP2i1OKQG_KrWl-KJd1n
          claim_id: c_1xPAumCKs95y3z9TbkuEuv
          source_id: s_2J6JwQfve8ET6tDjC5FvWR
          stance: supports
          locator: CBDB:335738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3ZYrusuQNlPR9llvgoPLE3
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1kh-CBvkcsPIj-ifrZF5h7
          claim_id: c_3ZYrusuQNlPR9llvgoPLE3
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HcH3xQmb7zb9n2w7Xu1CjS
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 205596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205596&o=json
            external_identifier: CBDB:205596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
    - claim:
        id: c_2Z6I2rbkDx769_HLZYZBO7
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_47WVpzYoLXDhtrVMCwtcBx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IIHAawz3AwRDnQ8sb--iO7
          claim_id: c_2Z6I2rbkDx769_HLZYZBO7
          source_id: s_B6_N-V1FTovqlWOLFzp7rl
          stance: supports
          locator: CBDB：兄弟 王之臣（205596）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之彥 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王之彥 之父／母。
          source:
            id: s_B6_N-V1FTovqlWOLFzp7rl
            source_type: api_record
            title: 中国历代人物传记资料库：王之彥（CBDB 335746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335746&o=json
            external_identifier: CBDB:335746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_47WVpzYoLXDhtrVMCwtcBx
        status: active
        display_name: 王之彥
        merged_into_person_id: null
    - claim:
        id: c_rXMHfNqn0gvgPa9187dHdw
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bp914SWLLCUnJ5t8RFw5U3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89nhbef-PDTYSsuJd0zxWL
          claim_id: c_rXMHfNqn0gvgPa9187dHdw
          source_id: s_x0i7R2l8kM6UJ9OxOXXBh4
          stance: supports
          locator: CBDB：兄弟 王之臣（205596）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之選 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王之選 之父／母。
          source:
            id: s_x0i7R2l8kM6UJ9OxOXXBh4
            source_type: api_record
            title: 中国历代人物传记资料库：王之選（CBDB 335745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335745&o=json
            external_identifier: CBDB:335745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bp914SWLLCUnJ5t8RFw5U3
        status: active
        display_name: 王之選
        merged_into_person_id: null
    - claim:
        id: c_fbhF7uw9TUyphX366oip_O
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_imSBxxNjvQXpQgsSbo4yZp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-UBSoWZzJ2Wil2CRJrVW_B
          claim_id: c_fbhF7uw9TUyphX366oip_O
          source_id: s__F7gY7DbmqKhYfTD1JHU2l
          stance: supports
          locator: CBDB：兄弟 王之臣（205596）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王銘 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王銘 之父／母。
          source:
            id: s__F7gY7DbmqKhYfTD1JHU2l
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 335744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335744&o=json
            external_identifier: CBDB:335744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_imSBxxNjvQXpQgsSbo4yZp
        status: active
        display_name: 王銘
        merged_into_person_id: null
    - claim:
        id: c_U7XVkTGyqvwFtYDEGLImOE
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sRp4whYFLRQxiuNyHaBd9j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_af8l5LeN4D39ezLmcGlrVB
          claim_id: c_U7XVkTGyqvwFtYDEGLImOE
          source_id: s_iwLho3frzz4qzk-VBFFcg9
          stance: supports
          locator: CBDB：兄弟 王之臣（205596）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑛 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王鑛 之父／母。
          source:
            id: s_iwLho3frzz4qzk-VBFFcg9
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 335742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335742&o=json
            external_identifier: CBDB:335742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sRp4whYFLRQxiuNyHaBd9j
        status: active
        display_name: 王鑛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6fvA7tcbJ3QZeAtYpG1JUJ | 王之臣 | accepted |
| children | p_47WVpzYoLXDhtrVMCwtcBx | 王之彥 | accepted |
| children | p_bp914SWLLCUnJ5t8RFw5U3 | 王之選 | accepted |
| children | p_imSBxxNjvQXpQgsSbo4yZp | 王銘 | accepted |
| children | p_sRp4whYFLRQxiuNyHaBd9j | 王鑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 335738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335738&o=json)
- [中国历代人物传记资料库：王鑛（CBDB 335742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335742&o=json)
- [中国历代人物传记资料库：王銘（CBDB 335744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335744&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 205596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205596&o=json)
- [中国历代人物传记资料库：王之選（CBDB 335745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335745&o=json)
- [中国历代人物传记资料库：王之彥（CBDB 335746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335746&o=json)
