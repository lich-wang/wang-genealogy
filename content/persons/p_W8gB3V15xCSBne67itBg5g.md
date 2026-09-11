---
schema: wang-person/v1
id: p_W8gB3V15xCSBne67itBg5g
status: active
merged_into: null
display_name: 王夬
cbdb_id: 19906
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P6XiqYA6RidHRFsHYh8RJM
        subject_person_id: p_W8gB3V15xCSBne67itBg5g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夬，宋人物。中国历代人物传记资料库（CBDB）以人物编号 19906 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HQwJSZuzX__Ta_rI2E5B9p
          claim_id: c_P6XiqYA6RidHRFsHYh8RJM
          source_id: s_a6KyK5DpkwAQAwjNycXLDR
          stance: supports
          locator: CBDB:19906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_a6KyK5DpkwAQAwjNycXLDR
            source_type: api_record
            title: 中国历代人物传记资料库：王夬（CBDB 19906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19906&o=json
            external_identifier: CBDB:19906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tEqtjHkoDHyvR911pFSzA2
        subject_person_id: p_W8gB3V15xCSBne67itBg5g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gq5XDbiKU4X2LaUt6oEjn7
          claim_id: c_tEqtjHkoDHyvR911pFSzA2
          source_id: s_a6KyK5DpkwAQAwjNycXLDR
          stance: supports
          locator: CBDB:19906
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_a6KyK5DpkwAQAwjNycXLDR
            source_type: api_record
            title: 中国历代人物传记资料库：王夬（CBDB 19906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19906&o=json
            external_identifier: CBDB:19906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7LPyUmgLPxzkq0Q4azGLEG
        subject_person_id: p_BiNVgvYz3nJ9G3CCb78YaH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W8gB3V15xCSBne67itBg5g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IkcZkQ_CtOx0rqm7P6M3CW
          claim_id: c_7LPyUmgLPxzkq0Q4azGLEG
          source_id: s_EJcpUPACuG7TChvvw4mLdp
          stance: supports
          locator: CBDB 双向互证（子 王夬 ⇄ 父 王周）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_EJcpUPACuG7TChvvw4mLdp
            source_type: api_record
            title: 中国历代人物传记资料库：王周（CBDB 19905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19905&o=json
            external_identifier: CBDB:19905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BiNVgvYz3nJ9G3CCb78YaH
        status: active
        display_name: 王周
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_jtRw0Gv3-Co6Kief3Zc5Ja
        subject_person_id: p_W8gB3V15xCSBne67itBg5g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pkSXJo8xxoebPx4rcropD6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HVd6IUNHUAHY-k09jazO7E
          claim_id: c_jtRw0Gv3-Co6Kief3Zc5Ja
          source_id: s_KkVkFqVNXkkUm7E6DexKdE
          stance: supports
          locator: CBDB 双向互证（祖父 王夬 ⇄ 孫 王瀹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_KkVkFqVNXkkUm7E6DexKdE
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹（CBDB 1936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1936&o=json
            external_identifier: CBDB:1936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pkSXJo8xxoebPx4rcropD6
        status: active
        display_name: 王瀹
        merged_into_person_id: null
  other: []
---

# 王夬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夬，宋人物。中国历代人物传记资料库（CBDB）以人物编号 19906 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王夬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BiNVgvYz3nJ9G3CCb78YaH | 王周 | accepted |
| descendants | p_pkSXJo8xxoebPx4rcropD6 | 王瀹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夬（CBDB 19906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19906&o=json)
- [中国历代人物传记资料库：王瀹（CBDB 1936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1936&o=json)
- [中国历代人物传记资料库：王周（CBDB 19905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19905&o=json)
