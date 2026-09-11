---
schema: wang-person/v1
id: p_EF5oFA8ecCVEM2iHJ6VWge
status: active
merged_into: null
display_name: 王海賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AWqpkM42vdaLubuyvvMzJo
        subject_person_id: p_EF5oFA8ecCVEM2iHJ6VWge
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PahPbu5ZJ4NsRr3adBv5H2
          claim_id: c_AWqpkM42vdaLubuyvvMzJo
          source_id: s_s81LQR1RVp24v6vgfLDLj5
          stance: supports
          locator: CBDB:32661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32661）
          source: &a1
            id: s_s81LQR1RVp24v6vgfLDLj5
            source_type: api_record
            title: 中国历代人物传记资料库：王海賓（CBDB 32661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32661&o=json
            external_identifier: CBDB:32661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yBsXds6Xs4xbX9CZnAGtYb
        subject_person_id: p_EF5oFA8ecCVEM2iHJ6VWge
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSCYXEQpdMwa6hiWNNqM2Y
          claim_id: c_yBsXds6Xs4xbX9CZnAGtYb
          source_id: s_s81LQR1RVp24v6vgfLDLj5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2B1XMEL8Cmj118pZLyrwGk
        subject_person_id: p_EF5oFA8ecCVEM2iHJ6VWge
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZDZYBtJsvpc4T2NBaYp67
          claim_id: c_2B1XMEL8Cmj118pZLyrwGk
          source_id: s_s81LQR1RVp24v6vgfLDLj5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mhFseXGF1EE2GIS2NFJ-iF
        subject_person_id: p_EF5oFA8ecCVEM2iHJ6VWge
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QqduQ4bBt2W7EX3AgTxcR6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_jRDdWPtr0tn-pbzvsYPN
          claim_id: c_mhFseXGF1EE2GIS2NFJ-iF
          source_id: s_s81LQR1RVp24v6vgfLDLj5
          stance: supports
          locator: CBDB 双向互证（子 王忠嗣 ⇄ 父 王海賓）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QqduQ4bBt2W7EX3AgTxcR6
        status: active
        display_name: 王忠嗣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王海賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王海賓 | accepted |
| death.date | 714年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QqduQ4bBt2W7EX3AgTxcR6 | 王忠嗣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海賓（CBDB 32661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32661&o=json)
