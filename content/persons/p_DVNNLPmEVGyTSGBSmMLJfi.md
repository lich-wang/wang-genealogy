---
schema: wang-person/v1
id: p_DVNNLPmEVGyTSGBSmMLJfi
status: active
merged_into: null
display_name: 王邦治
cbdb_id: 314677
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bMMozixU5ta2KjhN2mqhJt
        subject_person_id: p_DVNNLPmEVGyTSGBSmMLJfi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦治
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qp19Wrp56j6BEMsL6M4GeV
          claim_id: c_bMMozixU5ta2KjhN2mqhJt
          source_id: s_bKpUS2RMaC2BYiHVgGM4bL
          stance: supports
          locator: Q45442278
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_bKpUS2RMaC2BYiHVgGM4bL
            source_type: api_record
            title: 维基数据：王邦治（Q45442278）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442278
            external_identifier: Q45442278
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_krHHkhL6krnPrqZki42DSC
          claim_id: c_bMMozixU5ta2KjhN2mqhJt
          source_id: s_G8AnhkQm7jYYH6NDSUg8Wk
          stance: supports
          locator: CBDB:314677
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_G8AnhkQm7jYYH6NDSUg8Wk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邦治（314677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314677&o=json
            external_identifier: CBDB:314677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VGrd7fFVUddP4ccSKvk3V5
        subject_person_id: p_DVNNLPmEVGyTSGBSmMLJfi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦治，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 314677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m2ZmVnFaXsmuLSfBM3642d
          claim_id: c_VGrd7fFVUddP4ccSKvk3V5
          source_id: s_bKpUS2RMaC2BYiHVgGM4bL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_UJOcFwRGWzRC_WOtXLvkge
          claim_id: c_VGrd7fFVUddP4ccSKvk3V5
          source_id: s_G8AnhkQm7jYYH6NDSUg8Wk
          stance: supports
          locator: CBDB:314677
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mA5uP3aKAmyHqVWCTPdqc6
        subject_person_id: p_DVNNLPmEVGyTSGBSmMLJfi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XafvmbqFiWanFhRfKjJh1p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9y8YM3q7U5P7PLZevJXbhG
          claim_id: c_mA5uP3aKAmyHqVWCTPdqc6
          source_id: s_bKpUS2RMaC2BYiHVgGM4bL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_iK4PC397CPzUN91jfrPcdP
          claim_id: c_mA5uP3aKAmyHqVWCTPdqc6
          source_id: s_V82c4Y2GCs47mYwENCUT7M
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_V82c4Y2GCs47mYwENCUT7M
            source_type: api_record
            title: 维基数据：王通（Q45442342）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442342
            external_identifier: Q45442342
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
      object_person:
        id: p_XafvmbqFiWanFhRfKjJh1p
        status: active
        display_name: 王通
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_NKyWt6MX2EKGnybfQ7OuJq
        subject_person_id: p_DVNNLPmEVGyTSGBSmMLJfi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rco0DqrLM3TGonvbILpURt
          claim_id: c_NKyWt6MX2EKGnybfQ7OuJq
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PFzSq6kQwtCdVXYvMpdpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 67912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json
            external_identifier: CBDB:67912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KdnEK5JvxzCLuhzpo1b35X
        status: active
        display_name: 王鈇
        merged_into_person_id: null
  other: []
---

# 王邦治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦治 | accepted |
| bio.summary | 王邦治，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 314677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XafvmbqFiWanFhRfKjJh1p | 王通 | accepted |
| descendants | p_KdnEK5JvxzCLuhzpo1b35X | 王鈇 | accepted |

## 外部来源

- [维基数据：王邦治（Q45442278）](https://www.wikidata.org/wiki/Q45442278)
- [维基数据：王通（Q45442342）](https://www.wikidata.org/wiki/Q45442342)
- [中国历代人物传记资料库：王鈇（CBDB 67912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json)
- [CBDB 中国历代人物传记资料库：王邦治（314677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314677&o=json)
