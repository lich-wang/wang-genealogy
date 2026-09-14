---
schema: wang-person/v1
id: p_hGzTEBArhtNBmqP8bhoNhy
status: active
merged_into: null
display_name: 王祿
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fvy1c648p1L47J6R9Y1L83
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5meyTvLdHctXpTwxQPdmyt
          claim_id: c_Fvy1c648p1L47J6R9Y1L83
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: CBDB:304455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304455）
          source: &a1
            id: s_L9QNjobGVNfVRmQosp9J9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 304455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json
            external_identifier: CBDB:304455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LKzbd9EUt4HfqgvrvA7zJY
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿，明人物。嘉靖二十年進士，籍贯新城，曾任知縣。（中国历代人物传记资料库 CBDB 304455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_giTGHSUsOlFmv1PugcU93M
          claim_id: c_LKzbd9EUt4HfqgvrvA7zJY
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: CBDB:304455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fmyhD9WfZGeph0roJyba_X
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9BEqA5dR7iQfu_5n2FaIk
          claim_id: c_fmyhD9WfZGeph0roJyba_X
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        status: active
        display_name: 王材
        merged_into_person_id: null
    - claim:
        id: c_txOfWe3QRJ9kcKZNhHmNNJ
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Kk6qNfSJYpHQHN1WVLqmn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1YQsNHU-PuMkLXYUzIg7N
          claim_id: c_txOfWe3QRJ9kcKZNhHmNNJ
          source_id: s_9b_nZ2CC4WRiC9I9x_9xgq
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王檟 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王檟 之父／母。
          source:
            id: s_9b_nZ2CC4WRiC9I9x_9xgq
            source_type: api_record
            title: 中国历代人物传记资料库：王檟（CBDB 304466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json
            external_identifier: CBDB:304466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Kk6qNfSJYpHQHN1WVLqmn
        status: active
        display_name: 王檟
        merged_into_person_id: null
    - claim:
        id: c_SRG6rF2DVGggc-vaxjLo3K
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FBT3C8pvdwjHgahcUZ9Ajw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQlRagunYXA39N6-VoPgJh
          claim_id: c_SRG6rF2DVGggc-vaxjLo3K
          source_id: s_3T2Umjm5oZ9FdXWMPlVh4W
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王棐 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王棐 之父／母。
          source:
            id: s_3T2Umjm5oZ9FdXWMPlVh4W
            source_type: api_record
            title: 中国历代人物传记资料库：王棐（CBDB 304465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304465&o=json
            external_identifier: CBDB:304465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FBT3C8pvdwjHgahcUZ9Ajw
        status: active
        display_name: 王棐
        merged_into_person_id: null
    - claim:
        id: c_e54BbDkKgk3hyP6PkH9HVA
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_craNeTYRsCsjpnfPb5YZHB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IA8ifSycqbbuQnwl86XtjA
          claim_id: c_e54BbDkKgk3hyP6PkH9HVA
          source_id: s_gO6qeFgoh20fX_laalLVoK
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王休 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王休 之父／母。
          source:
            id: s_gO6qeFgoh20fX_laalLVoK
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 304462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304462&o=json
            external_identifier: CBDB:304462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_craNeTYRsCsjpnfPb5YZHB
        status: active
        display_name: 王休
        merged_into_person_id: null
    - claim:
        id: c_MJyqv-Ymwp8rtRp443VnL3
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jsvA9Jcpw1enAzLDEcNsg2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUGqJiMYEYwlbOsDZTluBg
          claim_id: c_MJyqv-Ymwp8rtRp443VnL3
          source_id: s_L85JsPepw3o-rhEhhdc1Pm
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王標 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王標 之父／母。
          source:
            id: s_L85JsPepw3o-rhEhhdc1Pm
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 304461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json
            external_identifier: CBDB:304461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jsvA9Jcpw1enAzLDEcNsg2
        status: active
        display_name: 王標
        merged_into_person_id: null
    - claim:
        id: c_FJISmn7tJ8thW-Zyto129_
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kH7u1nRgcnT3hj73244Ve3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fTL5A-hJiqrk9K4F1Fc2s5
          claim_id: c_FJISmn7tJ8thW-Zyto129_
          source_id: s_s-0lGtdjdBdWJMfGzqlGlG
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王臬 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王臬 之父／母。
          source:
            id: s_s-0lGtdjdBdWJMfGzqlGlG
            source_type: api_record
            title: 中国历代人物传记资料库：王臬（CBDB 304464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304464&o=json
            external_identifier: CBDB:304464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kH7u1nRgcnT3hj73244Ve3
        status: active
        display_name: 王臬
        merged_into_person_id: null
    - claim:
        id: c_Gf2cxuXvGqupWEQUi7qSf2
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vZzVN4SUg9s9NL3nKJPDmX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XOP9gi8vkyxqG3t7gDY7SK
          claim_id: c_Gf2cxuXvGqupWEQUi7qSf2
          source_id: s_Eo4cd2B-egTYohAT_4Bdmr
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王檄 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王檄 之父／母。
          source:
            id: s_Eo4cd2B-egTYohAT_4Bdmr
            source_type: api_record
            title: 中国历代人物传记资料库：王檄（CBDB 304463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304463&o=json
            external_identifier: CBDB:304463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vZzVN4SUg9s9NL3nKJPDmX
        status: active
        display_name: 王檄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| bio.summary | 王祿，明人物。嘉靖二十年進士，籍贯新城，曾任知縣。（中国历代人物传记资料库 CBDB 304455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H4Uy6ApLcV6Le6pdH8Y4bo | 王材 | accepted |
| children | p_4Kk6qNfSJYpHQHN1WVLqmn | 王檟 | accepted |
| children | p_FBT3C8pvdwjHgahcUZ9Ajw | 王棐 | accepted |
| children | p_craNeTYRsCsjpnfPb5YZHB | 王休 | accepted |
| children | p_jsvA9Jcpw1enAzLDEcNsg2 | 王標 | accepted |
| children | p_kH7u1nRgcnT3hj73244Ve3 | 王臬 | accepted |
| children | p_vZzVN4SUg9s9NL3nKJPDmX | 王檄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 304461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json)
- [中国历代人物传记资料库：王棐（CBDB 304465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304465&o=json)
- [中国历代人物传记资料库：王檟（CBDB 304466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304466&o=json)
- [中国历代人物传记资料库：王祿（CBDB 304455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json)
- [中国历代人物传记资料库：王臬（CBDB 304464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304464&o=json)
- [中国历代人物传记资料库：王檄（CBDB 304463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304463&o=json)
- [中国历代人物传记资料库：王休（CBDB 304462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304462&o=json)
