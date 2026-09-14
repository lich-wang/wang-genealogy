---
schema: wang-person/v1
id: p_LMg2m36RyXES2Bxat6rQQ2
status: active
merged_into: null
display_name: 王勛
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FJoxBPh58tLmHSY6Lx6YXd
        subject_person_id: p_LMg2m36RyXES2Bxat6rQQ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jFBkZR7qw6coqWX6gDcJ3H
          claim_id: c_FJoxBPh58tLmHSY6Lx6YXd
          source_id: s_3xZh4dDATnFFcmFeRS9Z4f
          stance: supports
          locator: CBDB:221894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221894）
          source: &a1
            id: s_3xZh4dDATnFFcmFeRS9Z4f
            source_type: api_record
            title: 中国历代人物传记资料库：王勛（CBDB 221894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221894&o=json
            external_identifier: CBDB:221894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NiX1BFvZ4jPjGbNtUy5ioZ
        subject_person_id: p_LMg2m36RyXES2Bxat6rQQ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勛，明人物。成化二年進士，籍贯大興，曾任教授。（中国历代人物传记资料库 CBDB 221894）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yKkFtW66qv-Ip5vpP5_Ihn
          claim_id: c_NiX1BFvZ4jPjGbNtUy5ioZ
          source_id: s_3xZh4dDATnFFcmFeRS9Z4f
          stance: supports
          locator: CBDB:221894
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ewn0f7H0bNF6AKRqCEaKiw
        subject_person_id: p_LMg2m36RyXES2Bxat6rQQ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9UaCXaJaTmj1YgVoNBE3L
          claim_id: c_Ewn0f7H0bNF6AKRqCEaKiw
          source_id: s_3xZh4dDATnFFcmFeRS9Z4f
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgcYnzEt3BLPFrXjEUGzEm
        status: active
        display_name: 王玶
        merged_into_person_id: null
    - claim:
        id: c_gEge2NqmlH3LyhzY5OCn2m
        subject_person_id: p_LMg2m36RyXES2Bxat6rQQ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JitX9FH1WHsJ8XqCdCxnMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AGLdMtNWRDgy6j49BZHpHW
          claim_id: c_gEge2NqmlH3LyhzY5OCn2m
          source_id: s_pfCyZF_BY_QKu_Xm_o36Y2
          stance: supports
          locator: CBDB：兄弟 王玶（199032）之父／母 王勛
          quotation: null
          interpretation_note: 由兄弟关系推断：王璒 与 王玶 为同胞（CBDB 记「兄」），王玶 之父／母即 王璒 之父／母。
          source:
            id: s_pfCyZF_BY_QKu_Xm_o36Y2
            source_type: api_record
            title: 中国历代人物传记资料库：王璒（CBDB 221938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221938&o=json
            external_identifier: CBDB:221938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JitX9FH1WHsJ8XqCdCxnMb
        status: active
        display_name: 王璒
        merged_into_person_id: null
    - claim:
        id: c_vxJFhW1rp0aGkfZGOxikrC
        subject_person_id: p_LMg2m36RyXES2Bxat6rQQ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_knUNNqCwQm1MnsmGYDeA7f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IIPcX2bLaRYl6ie3eaR6jl
          claim_id: c_vxJFhW1rp0aGkfZGOxikrC
          source_id: s_Q6hiqXdGkv9SiqCsMMcnoo
          stance: supports
          locator: CBDB：兄弟 王玶（199032）之父／母 王勛
          quotation: null
          interpretation_note: 由兄弟关系推断：王璔 与 王玶 为同胞（CBDB 记「弟」），王玶 之父／母即 王璔 之父／母。
          source:
            id: s_Q6hiqXdGkv9SiqCsMMcnoo
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 221927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221927&o=json
            external_identifier: CBDB:221927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_knUNNqCwQm1MnsmGYDeA7f
        status: active
        display_name: 王璔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勛 | accepted |
| bio.summary | 王勛，明人物。成化二年進士，籍贯大興，曾任教授。（中国历代人物传记资料库 CBDB 221894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HgcYnzEt3BLPFrXjEUGzEm | 王玶 | accepted |
| children | p_JitX9FH1WHsJ8XqCdCxnMb | 王璒 | accepted |
| children | p_knUNNqCwQm1MnsmGYDeA7f | 王璔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璒（CBDB 221938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221938&o=json)
- [中国历代人物传记资料库：王勛（CBDB 221894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221894&o=json)
- [中国历代人物传记资料库：王璔（CBDB 221927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221927&o=json)
