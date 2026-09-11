---
schema: wang-person/v1
id: p_ha2jFMvroq3Zp6PxAg7LoJ
status: active
merged_into: null
display_name: 王閏姐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bSTBtYvVBaWf5JqbiLJ79R
        subject_person_id: p_ha2jFMvroq3Zp6PxAg7LoJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏姐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M63XwhCBzh22tJ9amVRNFt
          claim_id: c_bSTBtYvVBaWf5JqbiLJ79R
          source_id: s_YEL1vRn8uCjuC8FKusZd22
          stance: supports
          locator: CBDB:699466
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699466）
          source: &a1
            id: s_YEL1vRn8uCjuC8FKusZd22
            source_type: api_record
            title: 中国历代人物传记资料库：王閏姐（CBDB 699466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699466&o=json
            external_identifier: CBDB:699466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rsyt2q1jDFWBeDzLMngPfc
        subject_person_id: p_ha2jFMvroq3Zp6PxAg7LoJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_668Sr2XgDLBMnLksLQqKhi
          claim_id: c_Rsyt2q1jDFWBeDzLMngPfc
          source_id: s_YEL1vRn8uCjuC8FKusZd22
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
  ancestors:
    - claim:
        id: c_fGVu8r9Ooj6zyHzR1EAZHX
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ha2jFMvroq3Zp6PxAg7LoJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERmLvlJi8ejW8f87y5eRk1
          claim_id: c_fGVu8r9Ooj6zyHzR1EAZHX
          source_id: s_YEL1vRn8uCjuC8FKusZd22
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9pk3GX9ak89DEB5HLBBuW
        status: active
        display_name: 王用
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王閏姐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閏姐 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_P9pk3GX9ak89DEB5HLBBuW | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王閏姐（CBDB 699466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699466&o=json)
