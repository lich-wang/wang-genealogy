---
schema: wang-person/v1
id: p_45Q2c6GZgSF9SozYgV2rEE
status: active
merged_into: null
display_name: 王慎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3vQmykZnzpBDP13w6yXHs8
        subject_person_id: p_45Q2c6GZgSF9SozYgV2rEE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AjMm7Hgc7RD8vgdVKAi1d8
          claim_id: c_3vQmykZnzpBDP13w6yXHs8
          source_id: s_LHHzcAJBLaSBWhBNbdStkT
          stance: supports
          locator: CBDB:471968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471968）
          source: &a1
            id: s_LHHzcAJBLaSBWhBNbdStkT
            source_type: api_record
            title: 中国历代人物传记资料库：王慎（CBDB 471968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471968&o=json
            external_identifier: CBDB:471968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzA97meYkrhAcBEk2pZSjN
        subject_person_id: p_45Q2c6GZgSF9SozYgV2rEE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 471968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fm4tCAnyQnCHp0GmoTHMLf
          claim_id: c_FzA97meYkrhAcBEk2pZSjN
          source_id: s_LHHzcAJBLaSBWhBNbdStkT
          stance: supports
          locator: CBDB:471968
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

# 王慎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎 | accepted |
| bio.summary | 王慎，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 471968） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慎（CBDB 471968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471968&o=json)
