---
schema: wang-person/v1
id: p_A5CBZ1n3Mcwk3xaQr1JNhx
status: active
merged_into: null
display_name: 王青鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XQZfSNUGn4pxmwj2WNUqnB
        subject_person_id: p_A5CBZ1n3Mcwk3xaQr1JNhx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王青鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wbY7xR5joi2R75m2cvyy1N
          claim_id: c_XQZfSNUGn4pxmwj2WNUqnB
          source_id: s_g8CuMegxGrwcercZR1vSNi
          stance: supports
          locator: CBDB:640849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640849）
          source: &a1
            id: s_g8CuMegxGrwcercZR1vSNi
            source_type: api_record
            title: 中国历代人物传记资料库：王青鑑（CBDB 640849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640849&o=json
            external_identifier: CBDB:640849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TRu4h2F6EweQqfmmPE9N6L
        subject_person_id: p_A5CBZ1n3Mcwk3xaQr1JNhx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王青鑑，清人物。籍贯肅州直隸州，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 640849）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZXU98VYQgSw6lUw1IKMQN3
          claim_id: c_TRu4h2F6EweQqfmmPE9N6L
          source_id: s_g8CuMegxGrwcercZR1vSNi
          stance: supports
          locator: CBDB:640849
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

# 王青鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王青鑑 | accepted |
| bio.summary | 王青鑑，清人物。籍贯肅州直隸州，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 640849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王青鑑（CBDB 640849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640849&o=json)
