---
schema: wang-person/v1
id: p_E31oomNBRBVCzfypYEt5JV
status: active
merged_into: null
display_name: 王嘉謀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zKcSQcb5K1LLrGmnFGQe2h
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EgTC3mH93nfesFSJqmkLir
          claim_id: c_zKcSQcb5K1LLrGmnFGQe2h
          source_id: s_U6drzBkRt9CU9vE5VConTZ
          stance: supports
          locator: CBDB:280852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280852）
          source: &a1
            id: s_U6drzBkRt9CU9vE5VConTZ
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謀（CBDB 280852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280852&o=json
            external_identifier: CBDB:280852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cDkJ6AXqeEjJSrH4G26q75
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謀，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LWu6d5HXhZJO_w_MFqn1MV
          claim_id: c_cDkJ6AXqeEjJSrH4G26q75
          source_id: s_U6drzBkRt9CU9vE5VConTZ
          stance: supports
          locator: CBDB:280852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZaRHHq7w41zYSuz98o74nt
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBzgqTxy3CB-o1WmjeiOKO
          claim_id: c_ZaRHHq7w41zYSuz98o74nt
          source_id: s_U6drzBkRt9CU9vE5VConTZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J9N7hzaFrJkzxknueiQ82Y
        status: active
        display_name: 王度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉謀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉謀 | accepted |
| bio.summary | 王嘉謀，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J9N7hzaFrJkzxknueiQ82Y | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉謀（CBDB 280852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280852&o=json)
