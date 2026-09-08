---
schema: wang-person/v1
id: p_tJA4SGo5rnDTPZB6FnPcWP
status: active
merged_into: null
display_name: 周氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eruFM9CvtRbVmptXpNvC8D
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uj92oYPqW5NN76k6iMtPN1
          claim_id: c_eruFM9CvtRbVmptXpNvC8D
          source_id: s_wEkVgfUrxKckakiL9hkMpN
          stance: supports
          locator: Q45432073
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_wEkVgfUrxKckakiL9hkMpN
            source_type: api_record
            title: 维基数据：周氏（Q45432073）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45432073
            external_identifier: Q45432073
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_DhCeei9bVCYFBdJFpvg7Gb
          claim_id: c_eruFM9CvtRbVmptXpNvC8D
          source_id: s_ZbRR2qinMrmQKSJZ5nhy4i
          stance: supports
          locator: CBDB:37792
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_ZbRR2qinMrmQKSJZ5nhy4i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周氏（37792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json
            external_identifier: CBDB:37792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytkK5QrgZeGBxgtNu8VQ47
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_wEkVgfUrxKckakiL9hkMpN
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_pUtycMAjmgxmoXHez6KEMc
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7fjU4ew89CPXuYB51QW2G2
            source_type: api_record
            title: 维基数据：王丕（Q45409552）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409552
            external_identifier: Q45409552
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_kchwVhEjTZ2jynRxspWXT7
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_EiMgRxz8FvPwrjw5WC3uNG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王丕（26228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json
            external_identifier: CBDB:26228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.430Z
            metadata_json: null
      object_person:
        id: p_Ue4bc6JWNDY3CgoJjDceoC
        status: active
        display_name: 王丕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Ue4bc6JWNDY3CgoJjDceoC | 王丕 | accepted |

## 外部来源

- [维基数据：王丕（Q45409552）](https://www.wikidata.org/wiki/Q45409552)
- [维基数据：周氏（Q45432073）](https://www.wikidata.org/wiki/Q45432073)
- [CBDB 中国历代人物传记资料库：王丕（26228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json)
- [CBDB 中国历代人物传记资料库：周氏（37792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37792&o=json)
