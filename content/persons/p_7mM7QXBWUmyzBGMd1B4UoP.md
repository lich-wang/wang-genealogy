---
schema: wang-person/v1
id: p_7mM7QXBWUmyzBGMd1B4UoP
status: active
merged_into: null
display_name: 王克
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4eAkWQCZNxNAWYP23AguVR
        subject_person_id: p_7mM7QXBWUmyzBGMd1B4UoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZTcq9cef61oxYVPNMC5QyB
          claim_id: c_4eAkWQCZNxNAWYP23AguVR
          source_id: s_v618UAwEx1D85BQnNjygKh
          stance: supports
          locator: CBDB:17842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17842）
          source: &a1
            id: s_v618UAwEx1D85BQnNjygKh
            source_type: api_record
            title: 中国历代人物传记资料库：王克（CBDB 17842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17842&o=json
            external_identifier: CBDB:17842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GQXm5e5nZqJXB9fCQiuo78
        subject_person_id: p_7mM7QXBWUmyzBGMd1B4UoP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1024年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jGsv3w2xHt56DQDunEeNS
          claim_id: c_GQXm5e5nZqJXB9fCQiuo78
          source_id: s_v618UAwEx1D85BQnNjygKh
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
        id: c_K9rx4PQLNGyvko7iBE4KC4
        subject_person_id: p_7mM7QXBWUmyzBGMd1B4UoP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1077年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZhWRMN7rCETpuJxeH5YVW
          claim_id: c_K9rx4PQLNGyvko7iBE4KC4
          source_id: s_v618UAwEx1D85BQnNjygKh
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
        id: c_XrQbgU6aZb76cgBC77AKxa
        subject_person_id: p_7mM7QXBWUmyzBGMd1B4UoP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克（1024年—1077年），宋人物。籍贯開封，入仕恩蔭、蔭補，曾任兵馬都監、都監、縣令。（中国历代人物传记资料库 CBDB 17842）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zlFkMhP_Nog5MDlT2ZCXLx
          claim_id: c_XrQbgU6aZb76cgBC77AKxa
          source_id: s_v618UAwEx1D85BQnNjygKh
          stance: supports
          locator: CBDB:17842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kLJRy9JhfOflF4zoWsh7LR
        subject_person_id: p_jZHYYykimMciC8RDnQUQX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mM7QXBWUmyzBGMd1B4UoP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WntsYplwgKeQCs-4nIGYCj
          claim_id: c_kLJRy9JhfOflF4zoWsh7LR
          source_id: s_v618UAwEx1D85BQnNjygKh
          stance: supports
          locator: CBDB 双向互证（父 王諒 ⇄ 子 王克）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_jZHYYykimMciC8RDnQUQX5
        status: active
        display_name: 王諒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克 | accepted |
| birth.date | 1024年 | accepted |
| death.date | 1077年 | accepted |
| bio.summary | 王克（1024年—1077年），宋人物。籍贯開封，入仕恩蔭、蔭補，曾任兵馬都監、都監、縣令。（中国历代人物传记资料库 CBDB 17842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jZHYYykimMciC8RDnQUQX5 | 王諒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克（CBDB 17842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17842&o=json)
