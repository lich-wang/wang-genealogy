---
schema: wang-person/v1
id: p_E7f9fyw1wKNTk9ED8RJPTC
status: active
merged_into: null
display_name: 王一鶚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Qtu6aFxUmfxovndNvrUF5
        subject_person_id: p_E7f9fyw1wKNTk9ED8RJPTC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鶚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ee8qneuuFLvAyNbCP9tEqx
          claim_id: c_1Qtu6aFxUmfxovndNvrUF5
          source_id: s_n3rcDcfdKTqMoHHmKTdRNN
          stance: supports
          locator: CBDB:230382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230382）
          source: &a1
            id: s_n3rcDcfdKTqMoHHmKTdRNN
            source_type: api_record
            title: 中国历代人物传记资料库：王一鶚（CBDB 230382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230382&o=json
            external_identifier: CBDB:230382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JgM1Xc8ycdqhb17KH9r1tW
        subject_person_id: p_E7f9fyw1wKNTk9ED8RJPTC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鶚，明人物。萬曆丙戌科進士進士，籍贯洋縣。（中国历代人物传记资料库 CBDB 230382）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_skXk8OXWb0nQzZRDQhhmbM
          claim_id: c_JgM1Xc8ycdqhb17KH9r1tW
          source_id: s_n3rcDcfdKTqMoHHmKTdRNN
          stance: supports
          locator: CBDB:230382
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3fAQbNbiiOGGbIGLuKbx2J
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7f9fyw1wKNTk9ED8RJPTC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btZuBuy-y9_4dn1nci7zyq
          claim_id: c_3fAQbNbiiOGGbIGLuKbx2J
          source_id: s_5PETxxKCO7Txs-80-gp6gC
          stance: supports
          locator: CBDB：兄弟 王一魁（207258）之父／母 王承光
          quotation: null
          interpretation_note: 由兄弟关系推断：王一鶚 与 王一魁 为同胞（CBDB 记「兄」），王一魁 之父／母即 王一鶚 之父／母。
          source:
            id: s_5PETxxKCO7Txs-80-gp6gC
            source_type: api_record
            title: 中国历代人物传记资料库：王一鶚（CBDB 230382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230382&o=json
            external_identifier: CBDB:230382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Yn1HjpWop229REQ9NGBi2
        status: active
        display_name: 王承光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vXcr1kPJ8KGXyQ6fCwazt7
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_E7f9fyw1wKNTk9ED8RJPTC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Cmy05FeOVC3S9xqyvKwks
          claim_id: c_vXcr1kPJ8KGXyQ6fCwazt7
          source_id: s_5PETxxKCO7Txs-80-gp6gC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207258 王一魁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5PETxxKCO7Txs-80-gp6gC
            source_type: api_record
            title: 中国历代人物传记资料库：王一鶚（CBDB 230382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230382&o=json
            external_identifier: CBDB:230382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DVJuaQ4fqcXMz2HJX35bCQ
        status: active
        display_name: 王一魁
        merged_into_person_id: null
---

# 王一鶚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鶚 | accepted |
| bio.summary | 王一鶚，明人物。萬曆丙戌科進士進士，籍贯洋縣。（中国历代人物传记资料库 CBDB 230382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Yn1HjpWop229REQ9NGBi2 | 王承光 | accepted |
| other | p_DVJuaQ4fqcXMz2HJX35bCQ | 王一魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一鶚（CBDB 230382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230382&o=json)
