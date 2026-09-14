---
schema: wang-person/v1
id: p_w6zLo9trTY22THztLK6BRA
status: active
merged_into: null
display_name: 王三益
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KY5RSGBob4tHr3vKoEBhqL
        subject_person_id: p_w6zLo9trTY22THztLK6BRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tBNYKzwB57f154dzHj2R16
          claim_id: c_KY5RSGBob4tHr3vKoEBhqL
          source_id: s_5k1yrgQr2dNBKxKGDMV4Gn
          stance: supports
          locator: CBDB:311399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311399）
          source: &a1
            id: s_5k1yrgQr2dNBKxKGDMV4Gn
            source_type: api_record
            title: 中国历代人物传记资料库：王三益（CBDB 311399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json
            external_identifier: CBDB:311399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LXshkTDPtTbVLL2jXkbLHa
        subject_person_id: p_w6zLo9trTY22THztLK6BRA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王三益，明人物。嘉靖二十六年進士，籍贯洪洞，入仕貢生: 選貢(優貢 after 1628)，曾任知縣。（中国历代人物传记资料库 CBDB 311399）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UadDx7yHPzVpsMbeJQy85T
          claim_id: c_LXshkTDPtTbVLL2jXkbLHa
          source_id: s_5k1yrgQr2dNBKxKGDMV4Gn
          stance: supports
          locator: CBDB:311399
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kr9H50SIjAM5_orhd6f_Bj
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w6zLo9trTY22THztLK6BRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_apEjrtx4PpJAns1PTdNctq
          claim_id: c_kr9H50SIjAM5_orhd6f_Bj
          source_id: s_E1L92XiDYNZsGPCY7y2Gsm
          stance: supports
          locator: CBDB：兄弟 王三接（203882）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王三益 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三益 之父／母。
          source:
            id: s_E1L92XiDYNZsGPCY7y2Gsm
            source_type: api_record
            title: 中国历代人物传记资料库：王三益（CBDB 311399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json
            external_identifier: CBDB:311399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qsqNNxC6SQb2oA7yPxzojc
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wClczLMlxYyw7E4OC6Yp4K
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w6zLo9trTY22THztLK6BRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WNrT5XzTL3mUlHwQIhkgKe
          claim_id: c_wClczLMlxYyw7E4OC6Yp4K
          source_id: s_E1L92XiDYNZsGPCY7y2Gsm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203882 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E1L92XiDYNZsGPCY7y2Gsm
            source_type: api_record
            title: 中国历代人物传记资料库：王三益（CBDB 311399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json
            external_identifier: CBDB:311399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vc9c3mkQxRy6aUfxzv3hqq
        status: active
        display_name: 王三接
        merged_into_person_id: null
---

# 王三益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三益 | accepted |
| bio.summary | 王三益，明人物。嘉靖二十六年進士，籍贯洪洞，入仕貢生: 選貢(優貢 after 1628)，曾任知縣。（中国历代人物传记资料库 CBDB 311399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qsqNNxC6SQb2oA7yPxzojc | 王相 | accepted |
| other | p_vc9c3mkQxRy6aUfxzv3hqq | 王三接 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三益（CBDB 311399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json)
