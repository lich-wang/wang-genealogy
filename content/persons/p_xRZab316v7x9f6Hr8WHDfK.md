---
schema: wang-person/v1
id: p_xRZab316v7x9f6Hr8WHDfK
status: active
merged_into: null
display_name: 王原
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n5ENKhSBhQgzsbHMkTxr2h
        subject_person_id: p_xRZab316v7x9f6Hr8WHDfK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ZWJja5SGXChvkiHrgsVBX
          claim_id: c_n5ENKhSBhQgzsbHMkTxr2h
          source_id: s_8SCHJFh3PHrQ8pAp1nKHLu
          stance: supports
          locator: CBDB:69323
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69323）
          source: &a1
            id: s_8SCHJFh3PHrQ8pAp1nKHLu
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 69323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69323&o=json
            external_identifier: CBDB:69323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FPLh3dA1Mky8PvNPzfJdqz
        subject_person_id: p_xRZab316v7x9f6Hr8WHDfK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1646年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D1gLCLXd81oWiuyVCZHEYL
          claim_id: c_FPLh3dA1Mky8PvNPzfJdqz
          source_id: s_8SCHJFh3PHrQ8pAp1nKHLu
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
        id: c_RD7w9ypECPvZFQpW3PbLTw
        subject_person_id: p_xRZab316v7x9f6Hr8WHDfK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1729年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6JnBVjWZHhCkSaC2e6REtW
          claim_id: c_RD7w9ypECPvZFQpW3PbLTw
          source_id: s_8SCHJFh3PHrQ8pAp1nKHLu
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
        id: c_byBNE6H5j6Mxy1YvNwKwFK
        subject_person_id: p_xRZab316v7x9f6Hr8WHDfK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原（1646年—1729年），清人物。明清進士進士，籍贯青浦，入仕進士，曾任知縣、縣知縣。（中国历代人物传记资料库 CBDB 69323）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p2K-qIihZxVIjOO2McGl8l
          claim_id: c_byBNE6H5j6Mxy1YvNwKwFK
          source_id: s_8SCHJFh3PHrQ8pAp1nKHLu
          stance: supports
          locator: CBDB:69323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uNKr3jEjVNX4vsSuwazsIc
        subject_person_id: p_BrY3vRFyhaL9Eciz6cKGtA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xRZab316v7x9f6Hr8WHDfK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1yAdozrR3xdMHWP7fCg5Ja
          claim_id: c_uNKr3jEjVNX4vsSuwazsIc
          source_id: s_8SCHJFh3PHrQ8pAp1nKHLu
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13027：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BrY3vRFyhaL9Eciz6cKGtA
        status: active
        display_name: 王九徵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王原 | accepted |
| birth.date | 1646年 | accepted |
| death.date | 1729年 | accepted |
| bio.summary | 王原（1646年—1729年），清人物。明清進士進士，籍贯青浦，入仕進士，曾任知縣、縣知縣。（中国历代人物传记资料库 CBDB 69323） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BrY3vRFyhaL9Eciz6cKGtA | 王九徵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王原（CBDB 69323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69323&o=json)
