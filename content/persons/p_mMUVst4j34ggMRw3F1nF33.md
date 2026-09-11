---
schema: wang-person/v1
id: p_mMUVst4j34ggMRw3F1nF33
status: active
merged_into: null
display_name: 王士元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y3QAPcH21vCRwRJMLTmxBQ
        subject_person_id: p_mMUVst4j34ggMRw3F1nF33
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ak32ZBpXERr3pcHKoC772X
          claim_id: c_Y3QAPcH21vCRwRJMLTmxBQ
          source_id: s_CwSwMmQUnUtGMRoeJjG2sk
          stance: supports
          locator: CBDB:101028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101028）
          source: &a1
            id: s_CwSwMmQUnUtGMRoeJjG2sk
            source_type: api_record
            title: 中国历代人物传记资料库：王士元（CBDB 101028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101028&o=json
            external_identifier: CBDB:101028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EqmaywC9H6eh3vyNMfvHKE
        subject_person_id: p_mMUVst4j34ggMRw3F1nF33
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士元，元人物。籍贯恩州，入仕進士，曾任知州、州判官。（中国历代人物传记资料库 CBDB 101028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qhUP61JIqw1aCIC6bEC9FB
          claim_id: c_EqmaywC9H6eh3vyNMfvHKE
          source_id: s_CwSwMmQUnUtGMRoeJjG2sk
          stance: supports
          locator: CBDB:101028
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

# 王士元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士元 | accepted |
| bio.summary | 王士元，元人物。籍贯恩州，入仕進士，曾任知州、州判官。（中国历代人物传记资料库 CBDB 101028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士元（CBDB 101028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101028&o=json)
