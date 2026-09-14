---
schema: wang-person/v1
id: p_883HuZzfrY39nQAkGjHotG
status: active
merged_into: null
display_name: 王俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TEjaxj92rbeQJn8yy6SNKA
        subject_person_id: p_883HuZzfrY39nQAkGjHotG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2BL9xuBKPkMUPGNpHA3Y3x
          claim_id: c_TEjaxj92rbeQJn8yy6SNKA
          source_id: s_z21vzErW1o9FN8B99KYSSC
          stance: supports
          locator: CBDB:336841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336841）
          source: &a1
            id: s_z21vzErW1o9FN8B99KYSSC
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 336841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json
            external_identifier: CBDB:336841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qx973s7xSH3sg5agGDJeMM
        subject_person_id: p_883HuZzfrY39nQAkGjHotG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。隆慶二年進士，籍贯威遠。（中国历代人物传记资料库 CBDB 336841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6J9fPq0zj5frqmNQ6yvn-J
          claim_id: c_qx973s7xSH3sg5agGDJeMM
          source_id: s_z21vzErW1o9FN8B99KYSSC
          stance: supports
          locator: CBDB:336841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__bV7BfNhZfNeFuuICATpBx
        subject_person_id: p_xaFW5n3rj8bBX5K7DicMLs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_883HuZzfrY39nQAkGjHotG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AitvxFrBswsKYm_ao-WiIR
          claim_id: c__bV7BfNhZfNeFuuICATpBx
          source_id: s_HczFL3GdmdLYvm3J52Osmm
          stance: supports
          locator: CBDB：兄弟 王儼（126890）之父／母 王三成
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王俊 之父／母。
          source:
            id: s_HczFL3GdmdLYvm3J52Osmm
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 336841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json
            external_identifier: CBDB:336841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xaFW5n3rj8bBX5K7DicMLs
        status: active
        display_name: 王三成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nfT2SxV4R-p8oXdniI-IPT
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_883HuZzfrY39nQAkGjHotG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TR5xRw94PBTSg6Y24we00S
          claim_id: c_nfT2SxV4R-p8oXdniI-IPT
          source_id: s_HczFL3GdmdLYvm3J52Osmm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126890 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HczFL3GdmdLYvm3J52Osmm
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 336841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json
            external_identifier: CBDB:336841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5eqa2npzGNMyLY9apLyg93
        status: active
        display_name: 王儼
        merged_into_person_id: null
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。隆慶二年進士，籍贯威遠。（中国历代人物传记资料库 CBDB 336841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xaFW5n3rj8bBX5K7DicMLs | 王三成 | accepted |
| other | p_5eqa2npzGNMyLY9apLyg93 | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 336841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336841&o=json)
