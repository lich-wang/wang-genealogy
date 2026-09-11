---
schema: wang-person/v1
id: p_YxBkGaUFxRpjGnbkXVK4ob
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 557777
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e8Air_mqjx4B_K-ftsorwX
        subject_person_id: p_YxBkGaUFxRpjGnbkXVK4ob
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C6oodfTXHC1yeZD9QDiiGD
          claim_id: c_e8Air_mqjx4B_K-ftsorwX
          source_id: s_7jYHqbFKu7JJnK4tQFdpme
          stance: supports
          locator: CBDB:557777
          quotation: null
          interpretation_note: CBDB 明确记录的王蘭配偶
          source: &a1
            id: s_7jYHqbFKu7JJnK4tQFdpme
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王蘭妻)（CBDB 557777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557777&o=json
            external_identifier: CBDB:557777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NPp-TiAgr2h79g90lvt4Rd
        subject_person_id: p_jbCaYaEREyBMaLsesnHvJR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YxBkGaUFxRpjGnbkXVK4ob
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BErZxszmgyS3DE2mCHr2jE
          claim_id: c_NPp-TiAgr2h79g90lvt4Rd
          source_id: s_7jYHqbFKu7JJnK4tQFdpme
          stance: supports
          locator: 南陽府志，lgid=878792：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jbCaYaEREyBMaLsesnHvJR
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jbCaYaEREyBMaLsesnHvJR | 王蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王蘭妻)（CBDB 557777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557777&o=json)
