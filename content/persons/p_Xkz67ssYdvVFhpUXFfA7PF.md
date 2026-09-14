---
schema: wang-person/v1
id: p_Xkz67ssYdvVFhpUXFfA7PF
status: active
merged_into: null
display_name: 王碩
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HF3R18kWrTZ4SFyXG5YRD
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a8nrGvSFRT7qTF2udLGwA9
          claim_id: c_4HF3R18kWrTZ4SFyXG5YRD
          source_id: s_Lc2U96qJXGEYvb3oUsfqzb
          stance: supports
          locator: CBDB:323256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323256）
          source: &a1
            id: s_Lc2U96qJXGEYvb3oUsfqzb
            source_type: api_record
            title: 中国历代人物传记资料库：王碩（CBDB 323256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323256&o=json
            external_identifier: CBDB:323256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W5EXC1JN3r93Q8gfKkEWmv
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩，明人物。嘉靖三十八年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 323256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HBrIiE9GcUKNzmUfYlEeeo
          claim_id: c_W5EXC1JN3r93Q8gfKkEWmv
          source_id: s_Lc2U96qJXGEYvb3oUsfqzb
          stance: supports
          locator: CBDB:323256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_S0RJByTsXA3Z6Epf51YxGy
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_466nsxZ3JM344kFn5S3u9k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1aV7ePEPInXoozFqNEa2i
          claim_id: c_S0RJByTsXA3Z6Epf51YxGy
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YADBmndHasVQP6F7cTjsWo
            source_type: api_record
            title: 中国历代人物传记资料库：王元敬（CBDB 126472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126472&o=json
            external_identifier: CBDB:126472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_466nsxZ3JM344kFn5S3u9k
        status: active
        display_name: 王元敬
        merged_into_person_id: null
    - claim:
        id: c_a73nI255WvF1_qwHIBpbvI
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MMVTsoArzwCSm5R3kdpHoL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AVya7qZRODy2RnxkpbY6Bm
          claim_id: c_a73nI255WvF1_qwHIBpbvI
          source_id: s_YEBo8fSW5yz0JqUYpIDWK5
          stance: supports
          locator: CBDB：兄弟 王元敬（126472）之父／母 王碩
          quotation: null
          interpretation_note: 由兄弟关系推断：王元德 与 王元敬 为同胞（CBDB 记「弟」），王元敬 之父／母即 王元德 之父／母。
          source:
            id: s_YEBo8fSW5yz0JqUYpIDWK5
            source_type: api_record
            title: 中国历代人物传记资料库：王元德（CBDB 323260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json
            external_identifier: CBDB:323260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MMVTsoArzwCSm5R3kdpHoL
        status: active
        display_name: 王元德
        merged_into_person_id: null
    - claim:
        id: c_KAIv7HzGiMcYYwREMfztWD
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PVTE2wkp6NNzCbZ8xRM1yq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WsEJ1Fl0AbDVSMVq542UnV
          claim_id: c_KAIv7HzGiMcYYwREMfztWD
          source_id: s_M-l-R7Z7BmKRsnDj_R2JpF
          stance: supports
          locator: CBDB：兄弟 王元敬（126472）之父／母 王碩
          quotation: null
          interpretation_note: 由兄弟关系推断：王元吉 与 王元敬 为同胞（CBDB 记「兄」），王元敬 之父／母即 王元吉 之父／母。
          source:
            id: s_M-l-R7Z7BmKRsnDj_R2JpF
            source_type: api_record
            title: 中国历代人物传记资料库：王元吉（CBDB 323261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323261&o=json
            external_identifier: CBDB:323261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PVTE2wkp6NNzCbZ8xRM1yq
        status: active
        display_name: 王元吉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王碩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王碩 | accepted |
| bio.summary | 王碩，明人物。嘉靖三十八年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 323256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_466nsxZ3JM344kFn5S3u9k | 王元敬 | accepted |
| children | p_MMVTsoArzwCSm5R3kdpHoL | 王元德 | accepted |
| children | p_PVTE2wkp6NNzCbZ8xRM1yq | 王元吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王碩（CBDB 323256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323256&o=json)
- [中国历代人物传记资料库：王元德（CBDB 323260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json)
- [中国历代人物传记资料库：王元吉（CBDB 323261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323261&o=json)
- [中国历代人物传记资料库：王元敬（CBDB 126472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126472&o=json)
