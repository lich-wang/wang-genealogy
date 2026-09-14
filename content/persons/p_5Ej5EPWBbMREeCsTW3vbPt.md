---
schema: wang-person/v1
id: p_5Ej5EPWBbMREeCsTW3vbPt
status: active
merged_into: null
display_name: 王潔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B1nNh8BGuWjQjkNirB42Mb
        subject_person_id: p_5Ej5EPWBbMREeCsTW3vbPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hu3ZLnby7PYqcKGB5uny1s
          claim_id: c_B1nNh8BGuWjQjkNirB42Mb
          source_id: s_PGjLQa15FHDFKLMCEJ7Ep7
          stance: supports
          locator: CBDB:247652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247652）
          source: &a1
            id: s_PGjLQa15FHDFKLMCEJ7Ep7
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 247652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247652&o=json
            external_identifier: CBDB:247652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4QNstH7MvbnetwF8UdEGR
        subject_person_id: p_5Ej5EPWBbMREeCsTW3vbPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潔，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lnYTz2ejFHNLIYeEMolmzk
          claim_id: c_U4QNstH7MvbnetwF8UdEGR
          source_id: s_PGjLQa15FHDFKLMCEJ7Ep7
          stance: supports
          locator: CBDB:247652
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Uv3483i2GnbDoY5cIXz0Ki
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Ej5EPWBbMREeCsTW3vbPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G17UhXj6nlAjHcaPl4jY44
          claim_id: c_Uv3483i2GnbDoY5cIXz0Ki
          source_id: s_b5AbGq0rWWCXgW66yV1mmw
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王潔 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王潔 之父／母。
          source:
            id: s_b5AbGq0rWWCXgW66yV1mmw
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 247652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247652&o=json
            external_identifier: CBDB:247652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_f6E-Ns9Qkhcn0nzpkc4kjo
        subject_person_id: p_5Ej5EPWBbMREeCsTW3vbPt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__GcvfinGoRBdMo8LE4Bufz
          claim_id: c_f6E-Ns9Qkhcn0nzpkc4kjo
          source_id: s_b5AbGq0rWWCXgW66yV1mmw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_b5AbGq0rWWCXgW66yV1mmw
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 247652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247652&o=json
            external_identifier: CBDB:247652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
---

# 王潔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潔 | accepted |
| bio.summary | 王潔，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |
| other | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潔（CBDB 247652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247652&o=json)
