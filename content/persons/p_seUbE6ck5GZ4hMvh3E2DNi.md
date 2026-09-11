---
schema: wang-person/v1
id: p_seUbE6ck5GZ4hMvh3E2DNi
status: active
merged_into: null
display_name: 王弘道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ggSFjjnsmfa5S24Hdswrb
        subject_person_id: p_seUbE6ck5GZ4hMvh3E2DNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98prXHGKyDYN3FBEBcefvF
          claim_id: c_1ggSFjjnsmfa5S24Hdswrb
          source_id: s_BjbqdmBPomzvoT2EsPXKNh
          stance: supports
          locator: CBDB:147257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147257）
          source: &a1
            id: s_BjbqdmBPomzvoT2EsPXKNh
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 147257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147257&o=json
            external_identifier: CBDB:147257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z2UuKRAVh9Z8sBtiYGMvxU
        subject_person_id: p_seUbE6ck5GZ4hMvh3E2DNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NL8DsyyaAUPGA12KB4BKhH
          claim_id: c_Z2UuKRAVh9Z8sBtiYGMvxU
          source_id: s_BjbqdmBPomzvoT2EsPXKNh
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
        id: c_3ihmp6X66bHOFRhwDvn3Y-
        subject_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_seUbE6ck5GZ4hMvh3E2DNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VPrOIgiTrt4dncnajTHEfp
          claim_id: c_3ihmp6X66bHOFRhwDvn3Y-
          source_id: s_kEgQzQXGiMVanGsGCriCxG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 140：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kEgQzQXGiMVanGsGCriCxG
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 139058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json
            external_identifier: CBDB:139058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kaFXcKYWcJzFn9BzKN5G5P
        status: active
        display_name: 王禮
        merged_into_person_id: null
  children:
    - claim:
        id: c_mXx-z7y7UG-Iw3S475-p5b
        subject_person_id: p_seUbE6ck5GZ4hMvh3E2DNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MbvvbbGMJNdvsnYJvUTTcw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LHYglwf-OFkoJviBLxQTp8
          claim_id: c_mXx-z7y7UG-Iw3S475-p5b
          source_id: s_9hCe3bh81awyGPPjZbdRFw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuidengfeng 4：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9hCe3bh81awyGPPjZbdRFw
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 139989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139989&o=json
            external_identifier: CBDB:139989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MbvvbbGMJNdvsnYJvUTTcw
        status: active
        display_name: 王定
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘道 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kaFXcKYWcJzFn9BzKN5G5P | 王禮 | accepted |
| children | p_MbvvbbGMJNdvsnYJvUTTcw | 王定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 139989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139989&o=json)
- [中国历代人物传记资料库：王弘道（CBDB 147257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147257&o=json)
- [中国历代人物传记资料库：王禮（CBDB 139058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json)
