---
schema: wang-person/v1
id: p_4sb9wxGED3WQ2wGXi8FqHp
status: active
merged_into: null
display_name: 王瑜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4zFhwww2v75eUUVKUtxo2N
        subject_person_id: p_4sb9wxGED3WQ2wGXi8FqHp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fDDGkaQxs2dSMXnbBLYWjZ
          claim_id: c_4zFhwww2v75eUUVKUtxo2N
          source_id: s_DpGPrMPYNC5Jt5pjde1HKA
          stance: supports
          locator: CBDB:281212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281212）
          source: &a1
            id: s_DpGPrMPYNC5Jt5pjde1HKA
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 281212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281212&o=json
            external_identifier: CBDB:281212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nSqRFC6aQs1J1XzMLASRqM
        subject_person_id: p_4sb9wxGED3WQ2wGXi8FqHp
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
        - id: cs_1VjVAjrJn4NGC6upoU1v44
          claim_id: c_nSqRFC6aQs1J1XzMLASRqM
          source_id: s_DpGPrMPYNC5Jt5pjde1HKA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_yAZW-N9sUaAPnsCYPGlMO9
        subject_person_id: p_4sb9wxGED3WQ2wGXi8FqHp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5RJmgKA1SKHVMCFoAzk8Ch
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hH3znf1MQ8kIdovZtN6NCU
          claim_id: c_yAZW-N9sUaAPnsCYPGlMO9
          source_id: s_DpGPrMPYNC5Jt5pjde1HKA
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5RJmgKA1SKHVMCFoAzk8Ch
        status: active
        display_name: 王納言
        merged_into_person_id: null
  other: []
---

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5RJmgKA1SKHVMCFoAzk8Ch | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 281212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281212&o=json)
