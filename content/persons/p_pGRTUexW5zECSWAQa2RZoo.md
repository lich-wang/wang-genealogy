---
schema: wang-person/v1
id: p_pGRTUexW5zECSWAQa2RZoo
status: active
merged_into: null
display_name: 王樹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FDaM29wpYYnSzY3F8GLGEK
        subject_person_id: p_pGRTUexW5zECSWAQa2RZoo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oA4JznFEGA8s2XD1Pd9gGc
          claim_id: c_FDaM29wpYYnSzY3F8GLGEK
          source_id: s_NeB2tv16VfB6Q4LkSZcDwK
          stance: supports
          locator: CBDB:526743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526743）
          source: &a1
            id: s_NeB2tv16VfB6Q4LkSZcDwK
            source_type: api_record
            title: 中国历代人物传记资料库：王樹（CBDB 526743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526743&o=json
            external_identifier: CBDB:526743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aAdg66GagHKVRBmf8hBcbZ
        subject_person_id: p_pGRTUexW5zECSWAQa2RZoo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3cMFGwSumQvoXwigKr1jyG
          claim_id: c_aAdg66GagHKVRBmf8hBcbZ
          source_id: s_NeB2tv16VfB6Q4LkSZcDwK
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
        id: c_9DvoijkXI_YOJqzZYOhcNI
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pGRTUexW5zECSWAQa2RZoo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KO1CVqqrG6MfpwVARJp2Y8
          claim_id: c_9DvoijkXI_YOJqzZYOhcNI
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12859：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DMBn8xGP7ZCv2YPCy1RuG1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 69161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json
            external_identifier: CBDB:69161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bdBg1E6ZDUGtDs96L6kMgo
        status: active
        display_name: 王汝揆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bdBg1E6ZDUGtDs96L6kMgo | 王汝揆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝揆（CBDB 69161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json)
- [中国历代人物传记资料库：王樹（CBDB 526743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526743&o=json)
