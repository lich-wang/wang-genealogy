---
schema: wang-person/v1
id: p_n5PPMWRJtHt4Q6RUyWCRJa
status: active
merged_into: null
display_name: 王國昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WtAeQ32Lyzs1KcyjXDDRB9
        subject_person_id: p_n5PPMWRJtHt4Q6RUyWCRJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hqGPueGVSXUKCmAv3eF49H
          claim_id: c_WtAeQ32Lyzs1KcyjXDDRB9
          source_id: s_LLFtdPcRoKZGnDabzzxGUP
          stance: supports
          locator: CBDB:64823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（64823）
          source: &a1
            id: s_LLFtdPcRoKZGnDabzzxGUP
            source_type: api_record
            title: 中国历代人物传记资料库：王國昌（CBDB 64823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64823&o=json
            external_identifier: CBDB:64823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_arHUkBxR5KKP9YWiYqV9zq
        subject_person_id: p_n5PPMWRJtHt4Q6RUyWCRJa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1728年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n4t1zkyEDCd2Z3gUQQx9DF
          claim_id: c_arHUkBxR5KKP9YWiYqV9zq
          source_id: s_LLFtdPcRoKZGnDabzzxGUP
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
        id: c_qQbQWiVvdbQxSgagt4Jzoi
        subject_person_id: p_n5PPMWRJtHt4Q6RUyWCRJa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國昌（卒于1728年），清人物。籍贯漢軍正白旗，入仕官學生。（中国历代人物传记资料库 CBDB 64823）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UY10_RqHi3B2WSy0BnSFcU
          claim_id: c_qQbQWiVvdbQxSgagt4Jzoi
          source_id: s_LLFtdPcRoKZGnDabzzxGUP
          stance: supports
          locator: CBDB:64823
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

# 王國昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國昌 | accepted |
| death.date | 1728年 | accepted |
| bio.summary | 王國昌（卒于1728年），清人物。籍贯漢軍正白旗，入仕官學生。（中国历代人物传记资料库 CBDB 64823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國昌（CBDB 64823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=64823&o=json)
