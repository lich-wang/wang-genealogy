---
schema: wang-person/v1
id: p_Tgvd3TYyTPXstVT3BwJ3wh
status: active
merged_into: null
display_name: 王厚之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPZPQtUeZzaYCpZWLGd6iJ
        subject_person_id: p_Tgvd3TYyTPXstVT3BwJ3wh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LZyoL3M5yrgE4yupXqMTx8
          claim_id: c_UPZPQtUeZzaYCpZWLGd6iJ
          source_id: s_eKoXf9N8S1uypnENdckBnf
          stance: supports
          locator: CBDB:3951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3951）
          source: &a1
            id: s_eKoXf9N8S1uypnENdckBnf
            source_type: api_record
            title: 中国历代人物传记资料库：王厚之（CBDB 3951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3951&o=json
            external_identifier: CBDB:3951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RBAfgWG2mnEZSMfgWBZgWM
        subject_person_id: p_Tgvd3TYyTPXstVT3BwJ3wh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1131年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJTXD66BVEoPqNP858uCNL
          claim_id: c_RBAfgWG2mnEZSMfgWBZgWM
          source_id: s_eKoXf9N8S1uypnENdckBnf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2u1tLV3FvpsAqKTxJ4QyFX
        subject_person_id: p_Tgvd3TYyTPXstVT3BwJ3wh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1204年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4zkULsndLoPUB29iRba5c7
          claim_id: c_2u1tLV3FvpsAqKTxJ4QyFX
          source_id: s_eKoXf9N8S1uypnENdckBnf
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
        id: c_Fbcgq2PagEFL82WvgTCwTS
        subject_person_id: p_Tgvd3TYyTPXstVT3BwJ3wh
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
        - id: cs_1MebD5rhXhxJH1EkFUvCuN
          claim_id: c_Fbcgq2PagEFL82WvgTCwTS
          source_id: s_eKoXf9N8S1uypnENdckBnf
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
        id: c_gQd7VqG0DSxHRzZow_uf4I
        subject_person_id: p_KTTATWUQ3F1m45Pemb3S7n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tgvd3TYyTPXstVT3BwJ3wh
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y0QgYXLPp_UfPAkS7W4mZg
          claim_id: c_gQd7VqG0DSxHRzZow_uf4I
          source_id: s_eKoXf9N8S1uypnENdckBnf
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1768：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KTTATWUQ3F1m45Pemb3S7n
        status: active
        display_name: 王安礼
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王厚之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚之 | accepted |
| birth.date | 1131年 | accepted |
| death.date | 1204年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_KTTATWUQ3F1m45Pemb3S7n | 王安礼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王厚之（CBDB 3951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3951&o=json)
