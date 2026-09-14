---
schema: wang-person/v1
id: p_bRHrDR8NYZKkW4VyQ8RSmV
status: active
merged_into: null
display_name: 王崈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wGh9oqHm3mKKnafLd7v2qi
        subject_person_id: p_bRHrDR8NYZKkW4VyQ8RSmV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P28AXCFnf1KwLZtAmZsJQB
          claim_id: c_wGh9oqHm3mKKnafLd7v2qi
          source_id: s_RHYeZ5xUR5nikw6L7fgkVF
          stance: supports
          locator: CBDB:253494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253494）
          source: &a1
            id: s_RHYeZ5xUR5nikw6L7fgkVF
            source_type: api_record
            title: 中国历代人物传记资料库：王崈（CBDB 253494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253494&o=json
            external_identifier: CBDB:253494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mj9y6PjJVGeA8DKJPfyFQy
        subject_person_id: p_bRHrDR8NYZKkW4VyQ8RSmV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崈，明人物。成化十四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 253494）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_moLYysGb8G8FKt1Dgx1kdL
          claim_id: c_mj9y6PjJVGeA8DKJPfyFQy
          source_id: s_RHYeZ5xUR5nikw6L7fgkVF
          stance: supports
          locator: CBDB:253494
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DSHndsvT4dMlm6tofceWgv
        subject_person_id: p_a8cvaHnoJBj7ek4wvWBpvS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bRHrDR8NYZKkW4VyQ8RSmV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v8TnDMdXEFI4i08rVSjbs5
          claim_id: c_DSHndsvT4dMlm6tofceWgv
          source_id: s_bflwOcg04Sn5mcnOYhyEww
          stance: supports
          locator: CBDB：兄弟 王賓（200080）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王崈 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王崈 之父／母。
          source:
            id: s_bflwOcg04Sn5mcnOYhyEww
            source_type: api_record
            title: 中国历代人物传记资料库：王崈（CBDB 253494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253494&o=json
            external_identifier: CBDB:253494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a8cvaHnoJBj7ek4wvWBpvS
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_D9bICDH047TE89pH9lIrk0
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bRHrDR8NYZKkW4VyQ8RSmV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMdWsbRXNpotmFuoCiY_me
          claim_id: c_D9bICDH047TE89pH9lIrk0
          source_id: s_bflwOcg04Sn5mcnOYhyEww
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200080 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bflwOcg04Sn5mcnOYhyEww
            source_type: api_record
            title: 中国历代人物传记资料库：王崈（CBDB 253494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253494&o=json
            external_identifier: CBDB:253494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A98pt7vCX7HThyxCGgsD4R
        status: active
        display_name: 王賓
        merged_into_person_id: null
---

# 王崈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崈 | accepted |
| bio.summary | 王崈，明人物。成化十四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 253494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a8cvaHnoJBj7ek4wvWBpvS | 王億 | accepted |
| other | p_A98pt7vCX7HThyxCGgsD4R | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崈（CBDB 253494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253494&o=json)
