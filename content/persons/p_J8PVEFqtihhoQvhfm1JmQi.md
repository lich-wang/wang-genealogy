---
schema: wang-person/v1
id: p_J8PVEFqtihhoQvhfm1JmQi
status: active
merged_into: null
display_name: 王成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ZsTcwtEESUynDAP27Jd4e
        subject_person_id: p_J8PVEFqtihhoQvhfm1JmQi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KTyrvBvhhG62LfiyEgfdw8
          claim_id: c_7ZsTcwtEESUynDAP27Jd4e
          source_id: s_b9eKByfRUkpV3qgBUifw34
          stance: supports
          locator: CBDB:117578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117578）
          source: &a1
            id: s_b9eKByfRUkpV3qgBUifw34
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 117578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117578&o=json
            external_identifier: CBDB:117578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Xn8Y4LWj3XK2phNzMTwNDE
        subject_person_id: p_J8PVEFqtihhoQvhfm1JmQi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1234年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmYG5d2fFKrRE6cR9kwE6C
          claim_id: c_Xn8Y4LWj3XK2phNzMTwNDE
          source_id: s_b9eKByfRUkpV3qgBUifw34
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
        id: c_qr3wyK9gH9PdvdVNpjH38c
        subject_person_id: p_J8PVEFqtihhoQvhfm1JmQi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1285年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6N7RUKqxUr736grdKQ514i
          claim_id: c_qr3wyK9gH9PdvdVNpjH38c
          source_id: s_b9eKByfRUkpV3qgBUifw34
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
        id: c_Ekgf33GBmzoBUpk8EzoKMh
        subject_person_id: p_J8PVEFqtihhoQvhfm1JmQi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成（1234年—1285年），元人物。曾任百戶、千戶所管軍總把。（中国历代人物传记资料库 CBDB 117578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HFszbKU-ZLVX1gymQ4yZnk
          claim_id: c_Ekgf33GBmzoBUpk8EzoKMh
          source_id: s_b9eKByfRUkpV3qgBUifw34
          stance: supports
          locator: CBDB:117578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| birth.date | 1234年 | accepted |
| death.date | 1285年 | accepted |
| bio.summary | 王成（1234年—1285年），元人物。曾任百戶、千戶所管軍總把。（中国历代人物传记资料库 CBDB 117578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 117578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117578&o=json)
