---
schema: wang-person/v1
id: p_jAmChPEVMec3gdCzVZvmN7
status: active
merged_into: null
display_name: 王琰
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1zbA8Y5up1adcpsXZiAouY
        subject_person_id: p_jAmChPEVMec3gdCzVZvmN7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cvj5NQoiam6oDhokHBzPGh
          claim_id: c_1zbA8Y5up1adcpsXZiAouY
          source_id: s_Ji2ft2NkphZHztCg9iiyp1
          stance: supports
          locator: CBDB:199781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199781）
          source: &a1
            id: s_Ji2ft2NkphZHztCg9iiyp1
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 199781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199781&o=json
            external_identifier: CBDB:199781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G4U1ZNwZ4Z5xZFfTH9js6L
        subject_person_id: p_jAmChPEVMec3gdCzVZvmN7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1446年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YZsoRXm4BgrR4gK8SFGPUk
          claim_id: c_G4U1ZNwZ4Z5xZFfTH9js6L
          source_id: s_Ji2ft2NkphZHztCg9iiyp1
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
        id: c_vEAEsAsiZGsNzUNgUEZFDA
        subject_person_id: p_jAmChPEVMec3gdCzVZvmN7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCqBQMwXbNkYpfk8VBwsaz
          claim_id: c_vEAEsAsiZGsNzUNgUEZFDA
          source_id: s_Ji2ft2NkphZHztCg9iiyp1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VVSvHXfXKLOTzfqC2P-1-G
        subject_person_id: p_VAeNtqM8ukkfLvnyiw11uS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jAmChPEVMec3gdCzVZvmN7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JAfSBVL03lfDBSg3UKZD6E
          claim_id: c_VVSvHXfXKLOTzfqC2P-1-G
          source_id: s_UjNF9JkQci4CZ4bYvZAQ7q
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UjNF9JkQci4CZ4bYvZAQ7q
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 249582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249582&o=json
            external_identifier: CBDB:249582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VAeNtqM8ukkfLvnyiw11uS
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_a1o9bUxEWbftnNsHJswI_6
        subject_person_id: p_5QJ9GKF3zgxJjKuZsz94tu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jAmChPEVMec3gdCzVZvmN7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rROCzXfMG1m1pCqEUoN8Nz
          claim_id: c_a1o9bUxEWbftnNsHJswI_6
          source_id: s_Mg82yRurrp2BDgiwSykKqJ
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mg82yRurrp2BDgiwSykKqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王仁美（CBDB 249581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249581&o=json
            external_identifier: CBDB:249581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5QJ9GKF3zgxJjKuZsz94tu
        status: active
        display_name: 王仁美
        merged_into_person_id: null
    - claim:
        id: c_IiDUu9-SKuXzD1LkbFKZMq
        subject_person_id: p_ABhtHq4M4KM1MmJK75jZsa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jAmChPEVMec3gdCzVZvmN7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eR6kIQE3aqSzYizG6t3inM
          claim_id: c_IiDUu9-SKuXzD1LkbFKZMq
          source_id: s_qoFkeGoeb5aFphWwMASkb8
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qoFkeGoeb5aFphWwMASkb8
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 249580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249580&o=json
            external_identifier: CBDB:249580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ABhtHq4M4KM1MmJK75jZsa
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| birth.date | 1446年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VAeNtqM8ukkfLvnyiw11uS | 王成 | accepted |
| ancestors | p_5QJ9GKF3zgxJjKuZsz94tu | 王仁美 | accepted |
| ancestors | p_ABhtHq4M4KM1MmJK75jZsa | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 249580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249580&o=json)
- [中国历代人物传记资料库：王成（CBDB 249582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249582&o=json)
- [中国历代人物传记资料库：王仁美（CBDB 249581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249581&o=json)
- [中国历代人物传记资料库：王琰（CBDB 199781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199781&o=json)
