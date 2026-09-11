---
schema: wang-person/v1
id: p_pUKJZx4uW5ecP3y1MJaSXS
status: active
merged_into: null
display_name: 王造周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H6MfQpfzG8R6nTKE7KzQa4
        subject_person_id: p_pUKJZx4uW5ecP3y1MJaSXS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王造周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wy4mq1PwmifQCAi1USwqqu
          claim_id: c_H6MfQpfzG8R6nTKE7KzQa4
          source_id: s_UhiUbo5ufVTGJKabowkCZQ
          stance: supports
          locator: CBDB:574266
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574266）
          source: &a1
            id: s_UhiUbo5ufVTGJKabowkCZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王造周（CBDB 574266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574266&o=json
            external_identifier: CBDB:574266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cU5BCpjLKx1a8cyBccyVx6
        subject_person_id: p_pUKJZx4uW5ecP3y1MJaSXS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王造周，清人物。籍贯黃岡，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574266）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l3-m8aooBAARoEckkL2y1q
          claim_id: c_cU5BCpjLKx1a8cyBccyVx6
          source_id: s_UhiUbo5ufVTGJKabowkCZQ
          stance: supports
          locator: CBDB:574266
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

# 王造周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王造周 | accepted |
| bio.summary | 王造周，清人物。籍贯黃岡，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574266） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王造周（CBDB 574266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574266&o=json)
