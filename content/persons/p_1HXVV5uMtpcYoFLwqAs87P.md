---
schema: wang-person/v1
id: p_1HXVV5uMtpcYoFLwqAs87P
status: active
merged_into: null
display_name: 王肅恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2c9sc22k1hjJnoYBkDRN7
        subject_person_id: p_1HXVV5uMtpcYoFLwqAs87P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3r5CLEv9ku4rJgBAntdQpu
          claim_id: c_R2c9sc22k1hjJnoYBkDRN7
          source_id: s_6Jojo3yWzBhZ4E5CMfhEas
          stance: supports
          locator: CBDB:639965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639965）
          source: &a1
            id: s_6Jojo3yWzBhZ4E5CMfhEas
            source_type: api_record
            title: 中国历代人物传记资料库：王肅恭（CBDB 639965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639965&o=json
            external_identifier: CBDB:639965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EHFWubHr3V3ssGGxLijHMR
        subject_person_id: p_1HXVV5uMtpcYoFLwqAs87P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王肅恭，清人物。籍贯廣寧，入仕監生: 例監(附監生)，曾任主事。（中国历代人物传记资料库 CBDB 639965）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eHIkhgyvxsPpzHpbrTf_7-
          claim_id: c_EHFWubHr3V3ssGGxLijHMR
          source_id: s_6Jojo3yWzBhZ4E5CMfhEas
          stance: supports
          locator: CBDB:639965
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

# 王肅恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅恭 | accepted |
| bio.summary | 王肅恭，清人物。籍贯廣寧，入仕監生: 例監(附監生)，曾任主事。（中国历代人物传记资料库 CBDB 639965） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肅恭（CBDB 639965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639965&o=json)
