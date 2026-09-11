---
schema: wang-person/v1
id: p_GNaSeG5RTZwxzAMHP6dsC2
status: active
merged_into: null
display_name: 王叔英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3xNfx6VmJ7i6imjPkL6ptA
        subject_person_id: p_GNaSeG5RTZwxzAMHP6dsC2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mU5x1vTAE6h3fWncADX1Gt
          claim_id: c_3xNfx6VmJ7i6imjPkL6ptA
          source_id: s_JxTf72iY8LEsxKZpoyyaUJ
          stance: supports
          locator: CBDB:34448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34448）
          source: &a1
            id: s_JxTf72iY8LEsxKZpoyyaUJ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔英（CBDB 34448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34448&o=json
            external_identifier: CBDB:34448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dnqAVQnPnAFx94L7Ez95aZ
        subject_person_id: p_GNaSeG5RTZwxzAMHP6dsC2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1372年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R4dE23TDP4qUsFQXsKch3P
          claim_id: c_dnqAVQnPnAFx94L7Ez95aZ
          source_id: s_JxTf72iY8LEsxKZpoyyaUJ
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
        id: c_ECw5EcL1hto9vM8pXZJ12G
        subject_person_id: p_GNaSeG5RTZwxzAMHP6dsC2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1402年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pWzkuAgH1QjsYVEgWqPQE
          claim_id: c_ECw5EcL1hto9vM8pXZJ12G
          source_id: s_JxTf72iY8LEsxKZpoyyaUJ
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
        id: c_62KBrFkYF6HRskjDHupYvo
        subject_person_id: p_GNaSeG5RTZwxzAMHP6dsC2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔英（1372年—1402年），明人物。籍贯黃巖，入仕徵辟，曾任府學、翰林院修撰、教授。（中国历代人物传记资料库 CBDB 34448）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5g_eQ0UW5i3Z0nttEMWOcG
          claim_id: c_62KBrFkYF6HRskjDHupYvo
          source_id: s_JxTf72iY8LEsxKZpoyyaUJ
          stance: supports
          locator: CBDB:34448
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

# 王叔英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔英 | accepted |
| birth.date | 1372年 | accepted |
| death.date | 1402年 | accepted |
| bio.summary | 王叔英（1372年—1402年），明人物。籍贯黃巖，入仕徵辟，曾任府學、翰林院修撰、教授。（中国历代人物传记资料库 CBDB 34448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔英（CBDB 34448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34448&o=json)
