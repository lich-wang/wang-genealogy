---
schema: wang-person/v1
id: p_VzFpQsn5Ar32uoTsJ68VJE
status: active
merged_into: null
display_name: 王鼒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ka5n3ehF51BgNASCf4KBQG
        subject_person_id: p_VzFpQsn5Ar32uoTsJ68VJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dvLyZ84bNpHMVBwedLUS8S
          claim_id: c_Ka5n3ehF51BgNASCf4KBQG
          source_id: s_tgsZqNhmQXzKadsm5Nf7Mf
          stance: supports
          locator: CBDB:71272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71272）
          source: &a1
            id: s_tgsZqNhmQXzKadsm5Nf7Mf
            source_type: api_record
            title: 中国历代人物传记资料库：王鼒（CBDB 71272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71272&o=json
            external_identifier: CBDB:71272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fCX9s4RhULhWRYU7ssWCrS
        subject_person_id: p_VzFpQsn5Ar32uoTsJ68VJE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1828年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_44tRTT6i7Bmyu8qQLYUmFD
          claim_id: c_fCX9s4RhULhWRYU7ssWCrS
          source_id: s_tgsZqNhmQXzKadsm5Nf7Mf
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
        id: c_YN34ZeG2ZUKX8Ug4pN9U2P
        subject_person_id: p_VzFpQsn5Ar32uoTsJ68VJE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1891年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tk7yTeAHA7QFe2pmnyv3f4
          claim_id: c_YN34ZeG2ZUKX8Ug4pN9U2P
          source_id: s_tgsZqNhmQXzKadsm5Nf7Mf
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
        id: c_HDAQzfHnt9GxfyZLz9U5er
        subject_person_id: p_VzFpQsn5Ar32uoTsJ68VJE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼒（1828年—1891年），清人物。籍贯涇縣。（中国历代人物传记资料库 CBDB 71272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q9IERm3CLsdr3LXsQlhTKj
          claim_id: c_HDAQzfHnt9GxfyZLz9U5er
          source_id: s_tgsZqNhmQXzKadsm5Nf7Mf
          stance: supports
          locator: CBDB:71272
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

# 王鼒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼒 | accepted |
| birth.date | 1828年 | accepted |
| death.date | 1891年 | accepted |
| bio.summary | 王鼒（1828年—1891年），清人物。籍贯涇縣。（中国历代人物传记资料库 CBDB 71272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼒（CBDB 71272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71272&o=json)
