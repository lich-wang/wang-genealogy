---
schema: wang-person/v1
id: p_P9cwCrTVLEY5WuWbUMvrd7
status: active
merged_into: null
display_name: 王森
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c5H92aAxRoRwqDmD4xajH7
        subject_person_id: p_P9cwCrTVLEY5WuWbUMvrd7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dHLMkM44VLWS53eTkYkPcQ
          claim_id: c_c5H92aAxRoRwqDmD4xajH7
          source_id: s_dkAvDTf24LYt345UMEpiEV
          stance: supports
          locator: CBDB:259545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259545）
          source: &a1
            id: s_dkAvDTf24LYt345UMEpiEV
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 259545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json
            external_identifier: CBDB:259545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75LAGMKW9uofKCnv1HQjSG
        subject_person_id: p_P9cwCrTVLEY5WuWbUMvrd7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FRRIVC6Nz5E6AvobbPWNim
          claim_id: c_75LAGMKW9uofKCnv1HQjSG
          source_id: s_dkAvDTf24LYt345UMEpiEV
          stance: supports
          locator: CBDB:259545
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JJh4VQ27htB1DV3SmpRtuD
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P9cwCrTVLEY5WuWbUMvrd7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zoNAMcYjl7zTQwDyTMMfP
          claim_id: c_JJh4VQ27htB1DV3SmpRtuD
          source_id: s_erwNQwwJ9mWG-Lncco1cBo
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王森 与 王術 为同胞（CBDB 记「兄」），王術 之父／母即 王森 之父／母。
          source:
            id: s_erwNQwwJ9mWG-Lncco1cBo
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 259545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json
            external_identifier: CBDB:259545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_isvcw6EfQic2NdXZzwfKeT
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_d3zQ-TF5-il1c08QAODQ6D
        subject_person_id: p_P9cwCrTVLEY5WuWbUMvrd7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViUv15AHrqaFQnmUiFFoXl
          claim_id: c_d3zQ-TF5-il1c08QAODQ6D
          source_id: s_erwNQwwJ9mWG-Lncco1cBo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_erwNQwwJ9mWG-Lncco1cBo
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 259545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json
            external_identifier: CBDB:259545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RxU5daA7Pb2tQNaYot8QGE
        status: active
        display_name: 王術
        merged_into_person_id: null
---

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| bio.summary | 王森，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_isvcw6EfQic2NdXZzwfKeT | 王洪 | accepted |
| other | p_RxU5daA7Pb2tQNaYot8QGE | 王術 | accepted |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 259545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json)
