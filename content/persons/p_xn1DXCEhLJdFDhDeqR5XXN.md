---
schema: wang-person/v1
id: p_xn1DXCEhLJdFDhDeqR5XXN
status: active
merged_into: null
display_name: 王昌餘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E2Te4ekL4sKbEnBUzpwE1D
        subject_person_id: p_xn1DXCEhLJdFDhDeqR5XXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌餘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pem5Hd64Pe81qv8KgkueXa
          claim_id: c_E2Te4ekL4sKbEnBUzpwE1D
          source_id: s_1uE5E5SwsZPe1SBGotpvno
          stance: supports
          locator: CBDB:638379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638379）
          source: &a1
            id: s_1uE5E5SwsZPe1SBGotpvno
            source_type: api_record
            title: 中国历代人物传记资料库：王昌餘（CBDB 638379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638379&o=json
            external_identifier: CBDB:638379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fTKH1FYBDjmk1t2cvJJU9V
        subject_person_id: p_xn1DXCEhLJdFDhDeqR5XXN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌餘，清人物。籍贯湖北省，曾任主事。（中国历代人物传记资料库 CBDB 638379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0NI4Mln_MK-nvejtut-t8w
          claim_id: c_fTKH1FYBDjmk1t2cvJJU9V
          source_id: s_1uE5E5SwsZPe1SBGotpvno
          stance: supports
          locator: CBDB:638379
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

# 王昌餘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌餘 | accepted |
| bio.summary | 王昌餘，清人物。籍贯湖北省，曾任主事。（中国历代人物传记资料库 CBDB 638379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌餘（CBDB 638379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638379&o=json)
