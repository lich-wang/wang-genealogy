---
schema: wang-person/v1
id: p_enjEd3QTh2MFQkVQhR4jLX
status: active
merged_into: null
display_name: 王襄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A75ZhkZbrzBoJT6rMGpGzk
        subject_person_id: p_enjEd3QTh2MFQkVQhR4jLX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hb54JFEdfgZgCsSWDhDXka
          claim_id: c_A75ZhkZbrzBoJT6rMGpGzk
          source_id: s_utoZKafPNXzJUJeK6AaMMW
          stance: supports
          locator: CBDB:22883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22883）
          source: &a1
            id: s_utoZKafPNXzJUJeK6AaMMW
            source_type: api_record
            title: 中国历代人物传记资料库：王襄（CBDB 22883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22883&o=json
            external_identifier: CBDB:22883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_niJAdJ48BBVcn5CVKCGWuC
        subject_person_id: p_enjEd3QTh2MFQkVQhR4jLX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄，宋人物。籍贯眉山，曾任文學。（中国历代人物传记资料库 CBDB 22883）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OmWbF7p_u2tmWI3vN-AHJf
          claim_id: c_niJAdJ48BBVcn5CVKCGWuC
          source_id: s_utoZKafPNXzJUJeK6AaMMW
          stance: supports
          locator: CBDB:22883
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eOxPomR9UKVlAPZAO0EV35
        subject_person_id: p_SmPfz1GTyTHvivAq4Anp7g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_enjEd3QTh2MFQkVQhR4jLX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ST3VQeRhJr7nPRjbtHOcoN
          claim_id: c_eOxPomR9UKVlAPZAO0EV35
          source_id: s_utoZKafPNXzJUJeK6AaMMW
          stance: supports
          locator: CBDB 双向互证（父 王君卿 ⇄ 子 王襄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_SmPfz1GTyTHvivAq4Anp7g
        status: active
        display_name: 王君卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_2knRjYuYhOi6_tbyQJzRSb
        subject_person_id: p_enjEd3QTh2MFQkVQhR4jLX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x4bp5Ci45FMuKz82qKbkW6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNVq-ChRHOXPQZ6ke3EHD3
          claim_id: c_2knRjYuYhOi6_tbyQJzRSb
          source_id: s_utoZKafPNXzJUJeK6AaMMW
          stance: supports
          locator: CBDB 双向互证（子 王忠彥 ⇄ 父 王襄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_x4bp5Ci45FMuKz82qKbkW6
        status: active
        display_name: 王忠彥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王襄 | accepted |
| bio.summary | 王襄，宋人物。籍贯眉山，曾任文學。（中国历代人物传记资料库 CBDB 22883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SmPfz1GTyTHvivAq4Anp7g | 王君卿 | accepted |
| children | p_x4bp5Ci45FMuKz82qKbkW6 | 王忠彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王襄（CBDB 22883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22883&o=json)
