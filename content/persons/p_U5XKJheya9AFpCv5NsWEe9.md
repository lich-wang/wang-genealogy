---
schema: wang-person/v1
id: p_U5XKJheya9AFpCv5NsWEe9
status: active
merged_into: null
display_name: 王阿八
cbdb_id: 148582
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1i74jr62bm7PpjyqpJHHtw
        subject_person_id: p_U5XKJheya9AFpCv5NsWEe9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阿八，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148582 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_6vMljrky4uqwMMa0cYonFn
          claim_id: c_1i74jr62bm7PpjyqpJHHtw
          source_id: s_zKHZzA2iHDubRkQmNPvjGF
          stance: supports
          locator: CBDB:148582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zKHZzA2iHDubRkQmNPvjGF
            source_type: api_record
            title: 中国历代人物传记资料库：王阿八（CBDB 148582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148582&o=json
            external_identifier: CBDB:148582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2ZpteoyMRL1iSwPBNbGqKG
        subject_person_id: p_U5XKJheya9AFpCv5NsWEe9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阿八
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GfKe1ACLdb6ZKqH1Df6toz
          claim_id: c_2ZpteoyMRL1iSwPBNbGqKG
          source_id: s_zKHZzA2iHDubRkQmNPvjGF
          stance: supports
          locator: CBDB:148582
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_zKHZzA2iHDubRkQmNPvjGF
            source_type: api_record
            title: 中国历代人物传记资料库：王阿八（CBDB 148582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148582&o=json
            external_identifier: CBDB:148582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cmoLr53-x7RYcQGbT9IT5H
        subject_person_id: p_LSNaDLg8FcueQoQZaFebRW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U5XKJheya9AFpCv5NsWEe9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xj7XwfvYuGUl4Lb4XF-D2O
          claim_id: c_cmoLr53-x7RYcQGbT9IT5H
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 56：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FisE7AAYkKUkQpkyCKX9xg
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 139635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139635&o=json
            external_identifier: CBDB:139635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LSNaDLg8FcueQoQZaFebRW
        status: active
        display_name: 王玄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王阿八

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王阿八，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148582 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王阿八 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LSNaDLg8FcueQoQZaFebRW | 王玄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王阿八（CBDB 148582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148582&o=json)
- [中国历代人物传记资料库：王玄（CBDB 139635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139635&o=json)
