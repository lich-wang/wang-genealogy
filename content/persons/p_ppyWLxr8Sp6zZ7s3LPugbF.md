---
schema: wang-person/v1
id: p_ppyWLxr8Sp6zZ7s3LPugbF
status: active
merged_into: null
display_name: 王綬
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3dSBkPCHH7DRCxPHxsLjr
        subject_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6GZ5bpL6xtn5ecfaArcAYC
          claim_id: c_K3dSBkPCHH7DRCxPHxsLjr
          source_id: s_hHQGMzXDULByyyWPBB6wfd
          stance: supports
          locator: CBDB:200972
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200972）
          source: &a1
            id: s_hHQGMzXDULByyyWPBB6wfd
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 200972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200972&o=json
            external_identifier: CBDB:200972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WYRRuGtoD1pPUGJAga4QdY
        subject_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRBWtLGTGt64PeAyJSqkxk
          claim_id: c_WYRRuGtoD1pPUGJAga4QdY
          source_id: s_hHQGMzXDULByyyWPBB6wfd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dZWjgQdfPrGCEE7AeFHaHZ
        subject_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬（生于1469年），明人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 200972）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K1eTMmKeToYT-0tWUSoU04
          claim_id: c_dZWjgQdfPrGCEE7AeFHaHZ
          source_id: s_hHQGMzXDULByyyWPBB6wfd
          stance: supports
          locator: CBDB:200972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sz0HM6FhYRHmKLTOZr5k_8
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eKOFEZpC_DsGnbS8Tu670n
          claim_id: c_sz0HM6FhYRHmKLTOZr5k_8
          source_id: s_ijLiG1JpcMMKHCdWa2Gv1L
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ijLiG1JpcMMKHCdWa2Gv1L
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257671&o=json
            external_identifier: CBDB:257671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mJNJQFE9z1VKCuzwAbNY9W
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_k_SFAUdYMWZcp5kOrkqAEX
        subject_person_id: p_qEZ5XAZtELsh4xjqgKuUd6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4wRX7j7WkxJ0MfROyMnzHf
          claim_id: c_k_SFAUdYMWZcp5kOrkqAEX
          source_id: s_ive934eT1oYiGVyXd3ETSt
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ive934eT1oYiGVyXd3ETSt
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 257670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json
            external_identifier: CBDB:257670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qEZ5XAZtELsh4xjqgKuUd6
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_qtV36e9-OVYcDBN0y9e_rK
        subject_person_id: p_Zu5bSg24vCFXjaKQH6XPbF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Hco4uxsm-Wr7bxjL1ua3x
          claim_id: c_qtV36e9-OVYcDBN0y9e_rK
          source_id: s_GVTk8rDEN1gqHJfHF8jhaF
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GVTk8rDEN1gqHJfHF8jhaF
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 257668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257668&o=json
            external_identifier: CBDB:257668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Zu5bSg24vCFXjaKQH6XPbF
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| birth.date | 1469年 | accepted |
| bio.summary | 王綬（生于1469年），明人物。明清進士進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 200972） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mJNJQFE9z1VKCuzwAbNY9W | 王信 | accepted |
| ancestors | p_qEZ5XAZtELsh4xjqgKuUd6 | 王英 | accepted |
| ancestors | p_Zu5bSg24vCFXjaKQH6XPbF | 王思誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 200972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200972&o=json)
- [中国历代人物传记资料库：王思誠（CBDB 257668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257668&o=json)
- [中国历代人物传记资料库：王信（CBDB 257671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257671&o=json)
- [中国历代人物传记资料库：王英（CBDB 257670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json)
