---
schema: wang-person/v1
id: p_YA1G7T5veW43cswnoFX8Ym
status: active
merged_into: null
display_name: 王智
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MCmZjUirhQu1YTGmM6LfiU
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDHonqQgLGuHrd4jJqEQqP
          claim_id: c_MCmZjUirhQu1YTGmM6LfiU
          source_id: s_pMJQrWJWFg3NGRVbPsxdgJ
          stance: supports
          locator: CBDB:198244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198244）
          source: &a1
            id: s_pMJQrWJWFg3NGRVbPsxdgJ
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 198244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198244&o=json
            external_identifier: CBDB:198244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cMZ94rNq2o95SGvgHpBeM9
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6KdAaAe2WXUZLXUDQfg4q1
          claim_id: c_cMZ94rNq2o95SGvgHpBeM9
          source_id: s_pMJQrWJWFg3NGRVbPsxdgJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H8pCYEM8fVV9FG6h4rbP3D
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智（生于1417年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 198244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XThJundxtBgsdz2tsxbDCP
          claim_id: c_H8pCYEM8fVV9FG6h4rbP3D
          source_id: s_pMJQrWJWFg3NGRVbPsxdgJ
          stance: supports
          locator: CBDB:198244
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U7HJ1P-1e8R5oslTLmk_qL
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjxP37B86LLld-lJIY8FrT
          claim_id: c_U7HJ1P-1e8R5oslTLmk_qL
          source_id: s_LaGtXL8bZHaMgGiByUGfsR
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LaGtXL8bZHaMgGiByUGfsR
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 245152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245152&o=json
            external_identifier: CBDB:245152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7qmh6ExHEGb6N6NWE8gC5i
        status: active
        display_name: 王昭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lUvdS4uXECpdO-zW1y7Z34
        subject_person_id: p_5CiwpaT532KeioGvv2CHML
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b6OrNKbyPzRZHuIf6qXyrK
          claim_id: c_lUvdS4uXECpdO-zW1y7Z34
          source_id: s_7MzCrChNbzFuhRgmoh5ByL
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7MzCrChNbzFuhRgmoh5ByL
            source_type: api_record
            title: 中国历代人物传记资料库：王國才（CBDB 245130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245130&o=json
            external_identifier: CBDB:245130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5CiwpaT532KeioGvv2CHML
        status: active
        display_name: 王國才
        merged_into_person_id: null
    - claim:
        id: c_lZvVHW-UqlBaqq_yL5KDfx
        subject_person_id: p_uzqpzNGoBs7AcESxEaJR7X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kGfUmsKYaYjSa8rp8tRdRh
          claim_id: c_lZvVHW-UqlBaqq_yL5KDfx
          source_id: s_xmxXLzitZgkEH1oGHMZtAZ
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xmxXLzitZgkEH1oGHMZtAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王興祖（CBDB 245141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245141&o=json
            external_identifier: CBDB:245141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uzqpzNGoBs7AcESxEaJR7X
        status: active
        display_name: 王興祖
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_TzpxP4oI6IXEYud9PzUoDg
        subject_person_id: p_54N819RTs5pjwtb5S3HRmk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xrH9r6c2DqKwXRhBDFYrEZ
          claim_id: c_TzpxP4oI6IXEYud9PzUoDg
          source_id: s_7A9LZRXbcAmtqZju-DkMGb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7A9LZRXbcAmtqZju-DkMGb
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json
            external_identifier: CBDB:245230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_54N819RTs5pjwtb5S3HRmk
        status: active
        display_name: 王禮
        merged_into_person_id: null
    - claim:
        id: c_PEXf2RN8TcsPc6H8cCl2wp
        subject_person_id: p_8gEjy7pHcwdTK9VLWt6GWo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EfTQkmhZv1erKkULAPCoZo
          claim_id: c_PEXf2RN8TcsPc6H8cCl2wp
          source_id: s_pwNj5mVeegB9libgBwra-X
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pwNj5mVeegB9libgBwra-X
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 245197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245197&o=json
            external_identifier: CBDB:245197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8gEjy7pHcwdTK9VLWt6GWo
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_I214JVcPMnpqYqG2Mqx4Rd
        subject_person_id: p_FWvZ6sTqvZcVxp6raPoXbp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EGhNwHZbPZwcTBVGY9DbmL
          claim_id: c_I214JVcPMnpqYqG2Mqx4Rd
          source_id: s_p34_hP5vWcb0GwQC5Z5rq6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p34_hP5vWcb0GwQC5Z5rq6
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 245208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245208&o=json
            external_identifier: CBDB:245208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FWvZ6sTqvZcVxp6raPoXbp
        status: active
        display_name: 王仁
        merged_into_person_id: null
    - claim:
        id: c_RJEG3v2ehGzjMzzCskKJgY
        subject_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_06Q2OLxHHKNFQvQ5oCvhHW
          claim_id: c_RJEG3v2ehGzjMzzCskKJgY
          source_id: s_67L5gY9iPDl7iHOUQfCJoX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_67L5gY9iPDl7iHOUQfCJoX
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 245219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json
            external_identifier: CBDB:245219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JMVqvEBj5oj2jaX7P1PA3S
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_Qlp5fROtu67Yuq4RcbYXtY
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_efNHrGiotg4wybSbC9erZa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bfW9Kl7xIkk_9C_PbO29S8
          claim_id: c_Qlp5fROtu67Yuq4RcbYXtY
          source_id: s_69iNVaaNVoDM0ypC1Y-unk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_69iNVaaNVoDM0ypC1Y-unk
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 245252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245252&o=json
            external_identifier: CBDB:245252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_efNHrGiotg4wybSbC9erZa
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_pq4NLVgeoc10b3Tyw9GLoM
        subject_person_id: p_YA1G7T5veW43cswnoFX8Ym
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gbG7ApcEri2g2HbS3ANnzm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_99Sjq3sQ0SI1usSptz68fY
          claim_id: c_pq4NLVgeoc10b3Tyw9GLoM
          source_id: s_zCRWTX-8wt1jh5h7jsmjzh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zCRWTX-8wt1jh5h7jsmjzh
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 245241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json
            external_identifier: CBDB:245241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gbG7ApcEri2g2HbS3ANnzm
        status: active
        display_name: 王聰
        merged_into_person_id: null
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| birth.date | 1417年 | accepted |
| bio.summary | 王智（生于1417年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 198244） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qmh6ExHEGb6N6NWE8gC5i | 王昭 | accepted |
| ancestors | p_5CiwpaT532KeioGvv2CHML | 王國才 | accepted |
| ancestors | p_uzqpzNGoBs7AcESxEaJR7X | 王興祖 | accepted |
| other | p_54N819RTs5pjwtb5S3HRmk | 王禮 | accepted |
| other | p_8gEjy7pHcwdTK9VLWt6GWo | 王俊 | accepted |
| other | p_FWvZ6sTqvZcVxp6raPoXbp | 王仁 | accepted |
| other | p_JMVqvEBj5oj2jaX7P1PA3S | 王義 | accepted |
| other | p_efNHrGiotg4wybSbC9erZa | 王恭 | accepted |
| other | p_gbG7ApcEri2g2HbS3ANnzm | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 245241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json)
- [中国历代人物传记资料库：王恭（CBDB 245252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245252&o=json)
- [中国历代人物传记资料库：王國才（CBDB 245130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245130&o=json)
- [中国历代人物传记资料库：王俊（CBDB 245197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245197&o=json)
- [中国历代人物传记资料库：王禮（CBDB 245230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json)
- [中国历代人物传记资料库：王仁（CBDB 245208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245208&o=json)
- [中国历代人物传记资料库：王興祖（CBDB 245141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245141&o=json)
- [中国历代人物传记资料库：王義（CBDB 245219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json)
- [中国历代人物传记资料库：王昭（CBDB 245152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245152&o=json)
- [中国历代人物传记资料库：王智（CBDB 198244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198244&o=json)
