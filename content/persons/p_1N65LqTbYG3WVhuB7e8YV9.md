---
schema: wang-person/v1
id: p_1N65LqTbYG3WVhuB7e8YV9
status: active
merged_into: null
display_name: 王珣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NE3sfTtkXp8NmFmjKJMsc5
        subject_person_id: p_1N65LqTbYG3WVhuB7e8YV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FUUWGrBwVvqKr8Q18bhpNn
          claim_id: c_NE3sfTtkXp8NmFmjKJMsc5
          source_id: s_J58pkDba94dRridqjoxRGn
          stance: supports
          locator: CBDB:282509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282509）
          source: &a1
            id: s_J58pkDba94dRridqjoxRGn
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 282509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282509&o=json
            external_identifier: CBDB:282509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gBhgzXradgt2GoJNgKdnV2
        subject_person_id: p_1N65LqTbYG3WVhuB7e8YV9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282509）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vxQiQtnJ72PNDNBEinqR1R
          claim_id: c_gBhgzXradgt2GoJNgKdnV2
          source_id: s_J58pkDba94dRridqjoxRGn
          stance: supports
          locator: CBDB:282509
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

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | 王珣，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282509） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珣（CBDB 282509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282509&o=json)
