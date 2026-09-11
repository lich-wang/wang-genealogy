---
schema: wang-person/v1
id: p_ByaL2j9168tKUdf3nttTcg
status: active
merged_into: null
display_name: 王亨煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xzLbzBYuY6mESPbA87rvTv
        subject_person_id: p_ByaL2j9168tKUdf3nttTcg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mE8hrF26zFBNMyh6vmEXD5
          claim_id: c_xzLbzBYuY6mESPbA87rvTv
          source_id: s_EDWyiKfRjAk9XN2haB7769
          stance: supports
          locator: CBDB:635856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635856）
          source: &a1
            id: s_EDWyiKfRjAk9XN2haB7769
            source_type: api_record
            title: 中国历代人物传记资料库：王亨煒（CBDB 635856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635856&o=json
            external_identifier: CBDB:635856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LvKaiWgBG4gXUJ7B35QW6B
        subject_person_id: p_ByaL2j9168tKUdf3nttTcg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨煒，清人物。籍贯長樂，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任郎中、知府。（中国历代人物传记资料库 CBDB 635856）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s6aVcm5TKeXWCP63K8MxqR
          claim_id: c_LvKaiWgBG4gXUJ7B35QW6B
          source_id: s_EDWyiKfRjAk9XN2haB7769
          stance: supports
          locator: CBDB:635856
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

# 王亨煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨煒 | accepted |
| bio.summary | 王亨煒，清人物。籍贯長樂，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任郎中、知府。（中国历代人物传记资料库 CBDB 635856） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨煒（CBDB 635856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635856&o=json)
