---
schema: wang-person/v1
id: p_nbcvs3Mtyp5WhvNQvFaFb2
status: active
merged_into: null
display_name: 王仲潮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o2gvdwnnygGtVcMN85fbY2
        subject_person_id: p_nbcvs3Mtyp5WhvNQvFaFb2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d5J9SeGQX7xNQc6PRPwf2Z
          claim_id: c_o2gvdwnnygGtVcMN85fbY2
          source_id: s_Rg7V8JF9QK2EDE2HGY6RUG
          stance: supports
          locator: CBDB:635952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635952）
          source: &a1
            id: s_Rg7V8JF9QK2EDE2HGY6RUG
            source_type: api_record
            title: 中国历代人物传记资料库：王仲潮（CBDB 635952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635952&o=json
            external_identifier: CBDB:635952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GkLV3yXX7d6aJRxkLRn5xm
        subject_person_id: p_nbcvs3Mtyp5WhvNQvFaFb2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲潮，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ig-2GWWOlHP6eR_BAqiIsm
          claim_id: c_GkLV3yXX7d6aJRxkLRn5xm
          source_id: s_Rg7V8JF9QK2EDE2HGY6RUG
          stance: supports
          locator: CBDB:635952
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

# 王仲潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲潮 | accepted |
| bio.summary | 王仲潮，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲潮（CBDB 635952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635952&o=json)
