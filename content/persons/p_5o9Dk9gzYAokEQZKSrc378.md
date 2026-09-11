---
schema: wang-person/v1
id: p_5o9Dk9gzYAokEQZKSrc378
status: active
merged_into: null
display_name: 王惟賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bcV7KZ4iuQgmshc6xD8Xz6
        subject_person_id: p_5o9Dk9gzYAokEQZKSrc378
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fjiTGA6w5kqfHWkZ9G1A69
          claim_id: c_bcV7KZ4iuQgmshc6xD8Xz6
          source_id: s_Dkt2UKu9ZKjd56VKqKNmkw
          stance: supports
          locator: CBDB:19886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19886）
          source: &a1
            id: s_Dkt2UKu9ZKjd56VKqKNmkw
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 19886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19886&o=json
            external_identifier: CBDB:19886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tesmk6kmXiJ4uKxVDoYfkh
        subject_person_id: p_5o9Dk9gzYAokEQZKSrc378
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢，宋人物。籍贯鄞縣，身份为士人、思想家。（中国历代人物传记资料库 CBDB 19886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aQcxp6OKzGPKAa5R9C8g7P
          claim_id: c_tesmk6kmXiJ4uKxVDoYfkh
          source_id: s_Dkt2UKu9ZKjd56VKqKNmkw
          stance: supports
          locator: CBDB:19886
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
  ancestors:
    - claim:
        id: c_pOueO-otEv30KoSYgqWk1c
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5o9Dk9gzYAokEQZKSrc378
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-bzhsQf6PHnq0u_FDiI5YH
          claim_id: c_pOueO-otEv30KoSYgqWk1c
          source_id: s_Dkt2UKu9ZKjd56VKqKNmkw
          stance: supports
          locator: CBDB 双向互证（曾祖 王正己 ⇄ 曾孫; 重孫 王惟賢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WfKGNEwFj8S9f7DUKj8X6D
        status: active
        display_name: 王正己
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惟賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟賢 | accepted |
| bio.summary | 王惟賢，宋人物。籍贯鄞縣，身份为士人、思想家。（中国历代人物传记资料库 CBDB 19886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_WfKGNEwFj8S9f7DUKj8X6D | 王正己 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟賢（CBDB 19886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19886&o=json)
