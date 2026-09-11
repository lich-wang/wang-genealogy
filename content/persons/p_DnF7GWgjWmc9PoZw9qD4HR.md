---
schema: wang-person/v1
id: p_DnF7GWgjWmc9PoZw9qD4HR
status: active
merged_into: null
display_name: 王伸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dYAquGQXwdwHPSbebjEQjV
        subject_person_id: p_DnF7GWgjWmc9PoZw9qD4HR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T3HBHmjFVpHsbd1N6BviFw
          claim_id: c_dYAquGQXwdwHPSbebjEQjV
          source_id: s_BdhH8TjT2LVr8RRGZs7P3Z
          stance: supports
          locator: CBDB:22040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22040）
          source: &a1
            id: s_BdhH8TjT2LVr8RRGZs7P3Z
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 22040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22040&o=json
            external_identifier: CBDB:22040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cLCd9ktteTMHjdH71Wijij
        subject_person_id: p_DnF7GWgjWmc9PoZw9qD4HR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伸，閩國人物。籍贯侯官。（中国历代人物传记资料库 CBDB 22040）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dPw9hQaIRbK5gI-qqxhV1d
          claim_id: c_cLCd9ktteTMHjdH71Wijij
          source_id: s_BdhH8TjT2LVr8RRGZs7P3Z
          stance: supports
          locator: CBDB:22040
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v9Jj0_7coESb2WdBfKZTxw
        subject_person_id: p_oNDU7zQtqTTiQX3XhFSuLY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DnF7GWgjWmc9PoZw9qD4HR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_krWw8dbFLQLPyUW29-FDXc
          claim_id: c_v9Jj0_7coESb2WdBfKZTxw
          source_id: s_BdhH8TjT2LVr8RRGZs7P3Z
          stance: supports
          locator: CBDB 双向互证（父 王護 ⇄ 子 王伸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_oNDU7zQtqTTiQX3XhFSuLY
        status: active
        display_name: 王護
        merged_into_person_id: null
  children:
    - claim:
        id: c_dpDFVSiK7j86aCT7ALKh3n
        subject_person_id: p_DnF7GWgjWmc9PoZw9qD4HR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k2RT97voAdmwyGZSrQgCE4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__2efsAj5ppLMz1BfUQ65s-
          claim_id: c_dpDFVSiK7j86aCT7ALKh3n
          source_id: s_BdhH8TjT2LVr8RRGZs7P3Z
          stance: supports
          locator: CBDB 双向互证（子 王廷簡 ⇄ 父 王伸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_k2RT97voAdmwyGZSrQgCE4
        status: active
        display_name: 王廷簡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伸 | accepted |
| bio.summary | 王伸，閩國人物。籍贯侯官。（中国历代人物传记资料库 CBDB 22040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oNDU7zQtqTTiQX3XhFSuLY | 王護 | accepted |
| children | p_k2RT97voAdmwyGZSrQgCE4 | 王廷簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伸（CBDB 22040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22040&o=json)
