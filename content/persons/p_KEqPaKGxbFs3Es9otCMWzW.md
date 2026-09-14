---
schema: wang-person/v1
id: p_KEqPaKGxbFs3Es9otCMWzW
status: active
merged_into: null
display_name: 王旭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zQaG96NMGpi51CsrQGseBb
        subject_person_id: p_KEqPaKGxbFs3Es9otCMWzW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p3R7BxaVsqviQ3WBNjpefq
          claim_id: c_zQaG96NMGpi51CsrQGseBb
          source_id: s_ZButzoXeLW4RPHmDDofEpm
          stance: supports
          locator: CBDB:240186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240186）
          source: &a1
            id: s_ZButzoXeLW4RPHmDDofEpm
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 240186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240186&o=json
            external_identifier: CBDB:240186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JmDpETJFGCzFEdUNu88bfq
        subject_person_id: p_KEqPaKGxbFs3Es9otCMWzW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旭，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zivbxF4ZwK3jjNzfSjy_hE
          claim_id: c_JmDpETJFGCzFEdUNu88bfq
          source_id: s_ZButzoXeLW4RPHmDDofEpm
          stance: supports
          locator: CBDB:240186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6EP7Pvxq8_mhZdGM5F1w9z
        subject_person_id: p_pXhKxQ18tXJwqo1Ez5cWyA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KEqPaKGxbFs3Es9otCMWzW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JOSdvAdwbRRjGkgZFHRWgg
          claim_id: c_6EP7Pvxq8_mhZdGM5F1w9z
          source_id: s_108nzMWSPG7qANYeO27JrB
          stance: supports
          locator: CBDB：兄弟 王昶（199167）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王旭 与 王昶 为同胞（CBDB 记「兄」），王昶 之父／母即 王旭 之父／母。
          source:
            id: s_108nzMWSPG7qANYeO27JrB
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 240186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240186&o=json
            external_identifier: CBDB:240186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pXhKxQ18tXJwqo1Ez5cWyA
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9xvwzmFlbAnxFPXxl4t_21
        subject_person_id: p_KEqPaKGxbFs3Es9otCMWzW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AM6B9eiQOepv5ZsW4MweNp
          claim_id: c_9xvwzmFlbAnxFPXxl4t_21
          source_id: s_108nzMWSPG7qANYeO27JrB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199167 王昶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_108nzMWSPG7qANYeO27JrB
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 240186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240186&o=json
            external_identifier: CBDB:240186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hx7iGJRJAsCsAgYtQcK5NG
        status: active
        display_name: 王昶
        merged_into_person_id: null
---

# 王旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旭 | accepted |
| bio.summary | 王旭，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pXhKxQ18tXJwqo1Ez5cWyA | 王麟 | accepted |
| other | p_hx7iGJRJAsCsAgYtQcK5NG | 王昶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旭（CBDB 240186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240186&o=json)
