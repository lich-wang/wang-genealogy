---
schema: wang-person/v1
id: p_7L4r7NikKLuME87FxENE47
status: active
merged_into: null
display_name: 王容生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jHo72Hs2117PuX815W6Qz4
        subject_person_id: p_7L4r7NikKLuME87FxENE47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ALVjdTRtLdymWaYdX84zzr
          claim_id: c_jHo72Hs2117PuX815W6Qz4
          source_id: s_BT71PjPr6AspEPwvXv7CWx
          stance: supports
          locator: CBDB:637236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637236）
          source: &a1
            id: s_BT71PjPr6AspEPwvXv7CWx
            source_type: api_record
            title: 中国历代人物传记资料库：王容生（CBDB 637236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637236&o=json
            external_identifier: CBDB:637236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iVSu247RGTGEoe5PpwSsi
        subject_person_id: p_7L4r7NikKLuME87FxENE47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容生，清人物。籍贯松江府，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637236）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_22zTHdxz16XwFwm4Db7gi5
          claim_id: c_1iVSu247RGTGEoe5PpwSsi
          source_id: s_BT71PjPr6AspEPwvXv7CWx
          stance: supports
          locator: CBDB:637236
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

# 王容生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王容生 | accepted |
| bio.summary | 王容生，清人物。籍贯松江府，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王容生（CBDB 637236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637236&o=json)
