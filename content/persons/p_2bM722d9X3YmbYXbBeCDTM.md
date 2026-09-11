---
schema: wang-person/v1
id: p_2bM722d9X3YmbYXbBeCDTM
status: active
merged_into: null
display_name: 王敬中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNccK1Y9P5D8ou6hM6MEjW
        subject_person_id: p_2bM722d9X3YmbYXbBeCDTM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mAwSwcUSWb3z4Lijobo5BA
          claim_id: c_yNccK1Y9P5D8ou6hM6MEjW
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
          stance: supports
          locator: CBDB:198032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198032）
          source: &a1
            id: s_HKUvL6tDCQPamiF1rrU2Yi
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 198032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json
            external_identifier: CBDB:198032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TX6ze6UDc4n6cUjbdTMuT7
        subject_person_id: p_2bM722d9X3YmbYXbBeCDTM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1324年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RjGwBiKBnsnm5tLtQsgNpy
          claim_id: c_TX6ze6UDc4n6cUjbdTMuT7
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
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
        id: c_9Rmu3H4chZWUWtbW7XRQjs
        subject_person_id: p_2bM722d9X3YmbYXbBeCDTM
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
        - id: cs_UkHHCd9zr3WWyfBUmyHtau
          claim_id: c_9Rmu3H4chZWUWtbW7XRQjs
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
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
        id: c_9vbOyrwBCjCWYWUjw6yhHu
        subject_person_id: p_zBHHyWbtJMhXN5DJPkc8Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2bM722d9X3YmbYXbBeCDTM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r0y-l25MqSdwHcBHKi901x
          claim_id: c_9vbOyrwBCjCWYWUjw6yhHu
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zBHHyWbtJMhXN5DJPkc8Hc
        status: active
        display_name: 王桂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xnhBs-UI3i7WaqMcr-jVji
        subject_person_id: p_77B1M9ugjRjaUugow1VTEB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2bM722d9X3YmbYXbBeCDTM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dSgxpE1u90lMzg8jZfLdoh
          claim_id: c_xnhBs-UI3i7WaqMcr-jVji
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_77B1M9ugjRjaUugow1VTEB
        status: active
        display_name: 王祖昇
        merged_into_person_id: null
    - claim:
        id: c_QJGhDgIPtoQ9k8njf0zmNJ
        subject_person_id: p_VaBkz2Eq5TiujxaCF8b84V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2bM722d9X3YmbYXbBeCDTM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCAdeXmvNF5GraOR3r3AB7
          claim_id: c_QJGhDgIPtoQ9k8njf0zmNJ
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VaBkz2Eq5TiujxaCF8b84V
        status: active
        display_name: 王益
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王敬中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬中 | accepted |
| birth.date | 1324年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zBHHyWbtJMhXN5DJPkc8Hc | 王桂 | accepted |
| ancestors | p_77B1M9ugjRjaUugow1VTEB | 王祖昇 | accepted |
| ancestors | p_VaBkz2Eq5TiujxaCF8b84V | 王益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬中（CBDB 198032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json)
