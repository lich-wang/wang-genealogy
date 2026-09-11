---
schema: wang-person/v1
id: p_wNMrpxUtRti8bzP7hKZHR4
status: active
merged_into: null
display_name: 王廣蔭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1CjKAHaYtTw9xKuZd1FyQr
        subject_person_id: p_wNMrpxUtRti8bzP7hKZHR4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QNt2o6JDajQHM4AhkydjnN
          claim_id: c_1CjKAHaYtTw9xKuZd1FyQr
          source_id: s_hTL2namEXvYfqznz1ZA7HD
          stance: supports
          locator: CBDB:61921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61921）
          source: &a1
            id: s_hTL2namEXvYfqznz1ZA7HD
            source_type: api_record
            title: 中国历代人物传记资料库：王廣蔭（CBDB 61921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61921&o=json
            external_identifier: CBDB:61921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ctMZYBAL8duHuiwn2Bvj4S
        subject_person_id: p_wNMrpxUtRti8bzP7hKZHR4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpeAJKfWDCUGnJ36tw59WW
          claim_id: c_ctMZYBAL8duHuiwn2Bvj4S
          source_id: s_hTL2namEXvYfqznz1ZA7HD
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
        id: c_JmuiEmPzpX8hj7KjXuLRGe
        subject_person_id: p_wNMrpxUtRti8bzP7hKZHR4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣蔭（卒于1851年），清人物。明清進士進士，籍贯通州直隸州直轄地方，入仕進士，曾任編修、大臣、工部尚書。（中国历代人物传记资料库 CBDB 61921）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d9p9Mng1htLNw89F8_iYBX
          claim_id: c_JmuiEmPzpX8hj7KjXuLRGe
          source_id: s_hTL2namEXvYfqznz1ZA7HD
          stance: supports
          locator: CBDB:61921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TaQgPuRiuz04_G9Cdshtc3
        subject_person_id: p_wNMrpxUtRti8bzP7hKZHR4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QA23hQV5iT5kPr7FCfzaTH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIQyAjox59p5YLmzYWWzHL
          claim_id: c_TaQgPuRiuz04_G9Cdshtc3
          source_id: s_hTL2namEXvYfqznz1ZA7HD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），5267：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QA23hQV5iT5kPr7FCfzaTH
        status: active
        display_name: 王來泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廣蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣蔭 | accepted |
| death.date | 1851年 | accepted |
| bio.summary | 王廣蔭（卒于1851年），清人物。明清進士進士，籍贯通州直隸州直轄地方，入仕進士，曾任編修、大臣、工部尚書。（中国历代人物传记资料库 CBDB 61921） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QA23hQV5iT5kPr7FCfzaTH | 王來泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廣蔭（CBDB 61921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61921&o=json)
