---
schema: wang-person/v1
id: p_D5ec5jupf1WyP5yU3NHEdT
status: active
merged_into: null
display_name: 王寵光
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2m7hUxkBgT89ZoteTHqK2r
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QNGx6A9YNNbzeNfRQG8DPj
          claim_id: c_2m7hUxkBgT89ZoteTHqK2r
          source_id: s_wdV6K2ia8sq6D4XoM6FygF
          stance: supports
          locator: CBDB:223500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223500）
          source: &a1
            id: s_wdV6K2ia8sq6D4XoM6FygF
            source_type: api_record
            title: 中国历代人物传记资料库：王寵光（CBDB 223500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223500&o=json
            external_identifier: CBDB:223500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2kQ6yYy1a8o6mxeaPY6un
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵光，明人物。萬曆十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 223500）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CDGwM1oSbikInUjF1FdEhb
          claim_id: c_U2kQ6yYy1a8o6mxeaPY6un
          source_id: s_wdV6K2ia8sq6D4XoM6FygF
          stance: supports
          locator: CBDB:223500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZSKp57-7sxauZEMZXRbejT
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BYJfPhEZfG99snxow17KHG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXCzwqpGLfBQnl_eraAf46
          claim_id: c_ZSKp57-7sxauZEMZXRbejT
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BP4YC1eP68nSyZzdL2ksaf
            source_type: api_record
            title: 中国历代人物传记资料库：王有功（CBDB 206804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json
            external_identifier: CBDB:206804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BYJfPhEZfG99snxow17KHG
        status: active
        display_name: 王有功
        merged_into_person_id: null
    - claim:
        id: c_K_FsINpLC4tV9xM12co5oE
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K8PL8Th6SwqNkJ31CRVazu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2f1-4GwChMMa0BpEZ3_ud
          claim_id: c_K_FsINpLC4tV9xM12co5oE
          source_id: s_beboH7ykmBJbOvGz5LW4fb
          stance: supports
          locator: CBDB：兄弟 王有功（206804）之父／母 王寵光
          quotation: null
          interpretation_note: 由兄弟关系推断：王有貞 与 王有功 为同胞（CBDB 记「兄」），王有功 之父／母即 王有貞 之父／母。
          source:
            id: s_beboH7ykmBJbOvGz5LW4fb
            source_type: api_record
            title: 中国历代人物传记资料库：王有貞（CBDB 223505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223505&o=json
            external_identifier: CBDB:223505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K8PL8Th6SwqNkJ31CRVazu
        status: active
        display_name: 王有貞
        merged_into_person_id: null
    - claim:
        id: c_NlDP6IHItFaZh8ypLc_h-3
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZgmFrCQX5gJ3tXEXw4uf37
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ZER7QUdCxCVJjUIQGVYuv
          claim_id: c_NlDP6IHItFaZh8ypLc_h-3
          source_id: s_8VLudJ3FihyXIVq-e3hzNP
          stance: supports
          locator: CBDB：兄弟 王有功（206804）之父／母 王寵光
          quotation: null
          interpretation_note: 由兄弟关系推断：王有德 与 王有功 为同胞（CBDB 记「弟」），王有功 之父／母即 王有德 之父／母。
          source:
            id: s_8VLudJ3FihyXIVq-e3hzNP
            source_type: api_record
            title: 中国历代人物传记资料库：王有德（CBDB 223503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223503&o=json
            external_identifier: CBDB:223503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZgmFrCQX5gJ3tXEXw4uf37
        status: active
        display_name: 王有德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寵光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寵光 | accepted |
| bio.summary | 王寵光，明人物。萬曆十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 223500） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BYJfPhEZfG99snxow17KHG | 王有功 | accepted |
| children | p_K8PL8Th6SwqNkJ31CRVazu | 王有貞 | accepted |
| children | p_ZgmFrCQX5gJ3tXEXw4uf37 | 王有德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵光（CBDB 223500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223500&o=json)
- [中国历代人物传记资料库：王有德（CBDB 223503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223503&o=json)
- [中国历代人物传记资料库：王有功（CBDB 206804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json)
- [中国历代人物传记资料库：王有貞（CBDB 223505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223505&o=json)
