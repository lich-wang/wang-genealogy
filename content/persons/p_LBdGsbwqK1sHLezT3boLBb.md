---
schema: wang-person/v1
id: p_LBdGsbwqK1sHLezT3boLBb
status: active
merged_into: null
display_name: 王紹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8msavo47x9bnoM518ZAWTo
        subject_person_id: p_LBdGsbwqK1sHLezT3boLBb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mJLQ2BkdZg5vq61sj1XJSQ
          claim_id: c_8msavo47x9bnoM518ZAWTo
          source_id: s_9UUN9Z8whcganPEP3Kz1y6
          stance: supports
          locator: CBDB:126695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126695）
          source: &a1
            id: s_9UUN9Z8whcganPEP3Kz1y6
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 126695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126695&o=json
            external_identifier: CBDB:126695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PvMYDUrPihT8aSTLCTUxPH
        subject_person_id: p_LBdGsbwqK1sHLezT3boLBb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。明清進士進士，籍贯曹州，身份为為善鄉里，入仕進士。（中国历代人物传记资料库 CBDB 126695）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DvLcOZraCrfYvVoyw20A9y
          claim_id: c_PvMYDUrPihT8aSTLCTUxPH
          source_id: s_9UUN9Z8whcganPEP3Kz1y6
          stance: supports
          locator: CBDB:126695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_12vqDtMo__tO-lsl2ptlP4
        subject_person_id: p_YaA4L9KPYthUAssTTYBQuu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LBdGsbwqK1sHLezT3boLBb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b87crxQEG8cJu4-4BvYEdF
          claim_id: c_12vqDtMo__tO-lsl2ptlP4
          source_id: s_2Cui8WApyt2V91jHFzzqSy
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2Cui8WApyt2V91jHFzzqSy
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 265423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265423&o=json
            external_identifier: CBDB:265423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YaA4L9KPYthUAssTTYBQuu
        status: active
        display_name: 王亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PMNxQy02iHHB_MoqmPyJUu
        subject_person_id: p_d6X5X9bjzcHYkKZwRaDPSR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LBdGsbwqK1sHLezT3boLBb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vpiJmyzfAWe-nv6CDIonjh
          claim_id: c_PMNxQy02iHHB_MoqmPyJUu
          source_id: s_ghHfV9b6FnV6c3SpDpgVJY
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ghHfV9b6FnV6c3SpDpgVJY
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 265422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265422&o=json
            external_identifier: CBDB:265422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d6X5X9bjzcHYkKZwRaDPSR
        status: active
        display_name: 王恕
        merged_into_person_id: null
    - claim:
        id: c_ESBo4IYA0ecHzFE261jyCP
        subject_person_id: p_Y75XX8DkAqUSNJtKuDF2CJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LBdGsbwqK1sHLezT3boLBb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r-5yAc1qmJBtOrz5A_QiJI
          claim_id: c_ESBo4IYA0ecHzFE261jyCP
          source_id: s_8sPxWmwFVMEx8PJVBMW7RK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8sPxWmwFVMEx8PJVBMW7RK
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 265421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265421&o=json
            external_identifier: CBDB:265421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y75XX8DkAqUSNJtKuDF2CJ
        status: active
        display_name: 王昭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。明清進士進士，籍贯曹州，身份为為善鄉里，入仕進士。（中国历代人物传记资料库 CBDB 126695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YaA4L9KPYthUAssTTYBQuu | 王亨 | accepted |
| ancestors | p_d6X5X9bjzcHYkKZwRaDPSR | 王恕 | accepted |
| ancestors | p_Y75XX8DkAqUSNJtKuDF2CJ | 王昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 265423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265423&o=json)
- [中国历代人物传记资料库：王紹（CBDB 126695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126695&o=json)
- [中国历代人物传记资料库：王恕（CBDB 265422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265422&o=json)
- [中国历代人物传记资料库：王昭（CBDB 265421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265421&o=json)
