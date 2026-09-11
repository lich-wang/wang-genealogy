---
schema: wang-person/v1
id: p_E9jxNaEZ92czziKzabfcUG
status: active
merged_into: null
display_name: 武曌
revision: 1
cbdb_id: 93663
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X55X5kCnI5Dm6MjlwpowFc
        subject_person_id: p_E9jxNaEZ92czziKzabfcUG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 武曌（624—705），唐人物。籍贯文水，身份为比丘尼、工於文，曾任才人、宸妃、皇帝。（中国历代人物传记资料库 CBDB 93663）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1qcJYWh1HXHuuE9WFUwlSP
          claim_id: c_X55X5kCnI5Dm6MjlwpowFc
          source_id: s_wJjT7AEvWyvGBE3fjNBG8s
          stance: supports
          locator: CBDB:93663
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wJjT7AEvWyvGBE3fjNBG8s
            source_type: api_record
            title: 中国历代人物传记资料库：武曌(武則天)（CBDB 93663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93663&o=json
            external_identifier: CBDB:93663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QW5pBAUiU3SNPkeT1s50xd
        subject_person_id: p_E9jxNaEZ92czziKzabfcUG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 武曌
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__YRvpBOyhWbPkrqgEaX8jM
          claim_id: c_QW5pBAUiU3SNPkeT1s50xd
          source_id: s_wJjT7AEvWyvGBE3fjNBG8s
          stance: supports
          locator: CBDB:93663
          quotation: null
          interpretation_note: CBDB 明确记录的唐高宗配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eLigXuyR_1LrtDFW7krKix
        subject_person_id: p_FX11CB9tTLVt3GMiHYtDmL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_E9jxNaEZ92czziKzabfcUG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__DNXQN7wWHMyyUbdbhg6il
          claim_id: c_eLigXuyR_1LrtDFW7krKix
          source_id: s_wJjT7AEvWyvGBE3fjNBG8s
          stance: supports
          locator: 舊唐書，115頁：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FX11CB9tTLVt3GMiHYtDmL
        status: active
        display_name: 唐高宗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 武曌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 武曌（624—705），唐人物。籍贯文水，身份为比丘尼、工於文，曾任才人、宸妃、皇帝。（中国历代人物传记资料库 CBDB 93663） | accepted |
| name.primary | 武曌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FX11CB9tTLVt3GMiHYtDmL | 唐高宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：武曌(武則天)（CBDB 93663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93663&o=json)
