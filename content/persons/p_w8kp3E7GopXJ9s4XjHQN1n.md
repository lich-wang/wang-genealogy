---
schema: wang-person/v1
id: p_w8kp3E7GopXJ9s4XjHQN1n
status: active
merged_into: null
display_name: 王哲
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d11gjPRDBRNTKEdVTsRe7L
        subject_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sPSNPpTNQQRmd15TbPhY8d
          claim_id: c_d11gjPRDBRNTKEdVTsRe7L
          source_id: s_rkCn4vsGs2tPCNdKBz1UJb
          stance: supports
          locator: CBDB:198811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198811）
          source: &a1
            id: s_rkCn4vsGs2tPCNdKBz1UJb
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 198811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198811&o=json
            external_identifier: CBDB:198811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3X5efMn3QrK5FDLuCL4vmN
        subject_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Yi81c6DdLyWvAQdU4kNWE
          claim_id: c_3X5efMn3QrK5FDLuCL4vmN
          source_id: s_rkCn4vsGs2tPCNdKBz1UJb
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
        id: c_PfbbRyDDLgD1ZJ3KSDpuQP
        subject_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲（生于1427年），明人物。明清進士進士，籍贯聞喜，入仕進士。（中国历代人物传记资料库 CBDB 198811）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bl3EOilcjDEslmL6423tg4
          claim_id: c_PfbbRyDDLgD1ZJ3KSDpuQP
          source_id: s_rkCn4vsGs2tPCNdKBz1UJb
          stance: supports
          locator: CBDB:198811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5YcqKMEtjeRHSi5_IATMC4
        subject_person_id: p_uZJh4H7M1v6Jx64KEif35w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_418N-wirpgL3R4-nCfzQ4L
          claim_id: c_5YcqKMEtjeRHSi5_IATMC4
          source_id: s_zzeVGkPbS36wkAhm4xE69d
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zzeVGkPbS36wkAhm4xE69d
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 319540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319540&o=json
            external_identifier: CBDB:319540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uZJh4H7M1v6Jx64KEif35w
        status: active
        display_name: 王肅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_RujeudHnCK0xqgSdn5U_O7
        subject_person_id: p_EAsE9fwqa4L48kMqLQ6ANz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-8jpc9a-K69kXwnaqiLItB
          claim_id: c_RujeudHnCK0xqgSdn5U_O7
          source_id: s_ncRuJzQGUbpUsLwa718fgN
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ncRuJzQGUbpUsLwa718fgN
            source_type: api_record
            title: 中国历代人物传记资料库：王克仁（CBDB 319529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319529&o=json
            external_identifier: CBDB:319529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EAsE9fwqa4L48kMqLQ6ANz
        status: active
        display_name: 王克仁
        merged_into_person_id: null
    - claim:
        id: c_dRg1NzbKVwT9zDADveCOBs
        subject_person_id: p_pUPVdYRgE2A79do23E28zW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cXg9jMRgiDIAAHXuolZJmH
          claim_id: c_dRg1NzbKVwT9zDADveCOBs
          source_id: s_toK8CR5wSE7AcWmFaNe1ts
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_toK8CR5wSE7AcWmFaNe1ts
            source_type: api_record
            title: 中国历代人物传记资料库：王景和（CBDB 319518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319518&o=json
            external_identifier: CBDB:319518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_pUPVdYRgE2A79do23E28zW
        status: active
        display_name: 王景和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | 王哲（生于1427年），明人物。明清進士進士，籍贯聞喜，入仕進士。（中国历代人物传记资料库 CBDB 198811） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uZJh4H7M1v6Jx64KEif35w | 王肅 | accepted |
| ancestors | p_EAsE9fwqa4L48kMqLQ6ANz | 王克仁 | accepted |
| ancestors | p_pUPVdYRgE2A79do23E28zW | 王景和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景和（CBDB 319518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319518&o=json)
- [中国历代人物传记资料库：王克仁（CBDB 319529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319529&o=json)
- [中国历代人物传记资料库：王肅（CBDB 319540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319540&o=json)
- [中国历代人物传记资料库：王哲（CBDB 198811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198811&o=json)
