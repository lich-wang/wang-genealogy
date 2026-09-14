---
schema: wang-person/v1
id: p_YaA4L9KPYthUAssTTYBQuu
status: active
merged_into: null
display_name: 王亨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YyQXjNAAfwoeb24FAdQt6Q
        subject_person_id: p_YaA4L9KPYthUAssTTYBQuu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MDAEvUz2j1BKHXwfb5TaTH
          claim_id: c_YyQXjNAAfwoeb24FAdQt6Q
          source_id: s_2Cui8WApyt2V91jHFzzqSy
          stance: supports
          locator: CBDB:265423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265423）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JvG4ALjG9s3q3HZUjH83Mt
        subject_person_id: p_YaA4L9KPYthUAssTTYBQuu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨，明人物。弘治六年進士，籍贯曹州，曾任鹽課司大使。（中国历代人物传记资料库 CBDB 265423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fqZ1h0p7m59yNKkfmLIrDR
          claim_id: c_JvG4ALjG9s3q3HZUjH83Mt
          source_id: s_2Cui8WApyt2V91jHFzzqSy
          stance: supports
          locator: CBDB:265423
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_LBdGsbwqK1sHLezT3boLBb
        status: active
        display_name: 王紹
        merged_into_person_id: null
    - claim:
        id: c_rdW9ivOrmjTT8e2I3bn7e5
        subject_person_id: p_YaA4L9KPYthUAssTTYBQuu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZN15GerPKcQLYm1R2apkXv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ULmDP2V9nSSEE6N9hcTr7H
          claim_id: c_rdW9ivOrmjTT8e2I3bn7e5
          source_id: s_xMuC8xyhavn0Fr55cGTcNG
          stance: supports
          locator: CBDB：兄弟 王紹（126695）之父／母 王亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王緯 与 王紹 为同胞（CBDB 记「兄」），王紹 之父／母即 王緯 之父／母。
          source:
            id: s_xMuC8xyhavn0Fr55cGTcNG
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 265429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265429&o=json
            external_identifier: CBDB:265429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZN15GerPKcQLYm1R2apkXv
        status: active
        display_name: 王緯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | 王亨，明人物。弘治六年進士，籍贯曹州，曾任鹽課司大使。（中国历代人物传记资料库 CBDB 265423） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LBdGsbwqK1sHLezT3boLBb | 王紹 | accepted |
| children | p_ZN15GerPKcQLYm1R2apkXv | 王緯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 265423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265423&o=json)
- [中国历代人物传记资料库：王緯（CBDB 265429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265429&o=json)
