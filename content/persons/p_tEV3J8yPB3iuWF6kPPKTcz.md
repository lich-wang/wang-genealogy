---
schema: wang-person/v1
id: p_tEV3J8yPB3iuWF6kPPKTcz
status: active
merged_into: null
display_name: 王政
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7e1pH8H96PNCGfQX4whHcv
        subject_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3RssaKcxhDg7gELB9MVJEs
          claim_id: c_7e1pH8H96PNCGfQX4whHcv
          source_id: s_EWwgF7nuZj82Z6Nh2bv6WK
          stance: supports
          locator: CBDB:206851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206851）
          source: &a1
            id: s_EWwgF7nuZj82Z6Nh2bv6WK
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 206851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206851&o=json
            external_identifier: CBDB:206851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ddD55iNf4RHfBR7hL4vDqr
        subject_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_62EjDGYEZfsvnrv5oxQSjH
          claim_id: c_ddD55iNf4RHfBR7hL4vDqr
          source_id: s_EWwgF7nuZj82Z6Nh2bv6WK
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
        id: c_s6sLrC831PUYeTnCdUiXS4
        subject_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政（生于1561年），明人物。萬曆十一年進士，籍贯孝義，入仕進士。（中国历代人物传记资料库 CBDB 206851）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UNTb9csctFBeeYixnuCNyq
          claim_id: c_s6sLrC831PUYeTnCdUiXS4
          source_id: s_EWwgF7nuZj82Z6Nh2bv6WK
          stance: supports
          locator: CBDB:206851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2AfwycYer1u9wLk0cFCjvp
        subject_person_id: p_cieoMVnBzJB9M1g8jnDdbx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8tOsQzXqRNyyOp2RW7BcHa
          claim_id: c_2AfwycYer1u9wLk0cFCjvp
          source_id: s_gG5ca6Aq2VX9yjN5TbYq4G
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gG5ca6Aq2VX9yjN5TbYq4G
            source_type: api_record
            title: 中国历代人物传记资料库：王廷言（CBDB 224128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224128&o=json
            external_identifier: CBDB:224128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cieoMVnBzJB9M1g8jnDdbx
        status: active
        display_name: 王廷言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_36o7RAm0aJzb64yjr0pKTE
        subject_person_id: p_3e6sK146UAQHvzkeM4nnKp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nu7rhGdE4MZDEwXtP6__HM
          claim_id: c_36o7RAm0aJzb64yjr0pKTE
          source_id: s_puq4Vz1TBLmaZWUFeaDx2B
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_puq4Vz1TBLmaZWUFeaDx2B
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 224127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224127&o=json
            external_identifier: CBDB:224127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3e6sK146UAQHvzkeM4nnKp
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_7n1q9OgsELWNIFZSAmEZER
        subject_person_id: p_oxN22cLhWgB5VUPBzRfa6s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76W7vlGrxJl6ThkhwcbJp-
          claim_id: c_7n1q9OgsELWNIFZSAmEZER
          source_id: s_4c33TSsF54bjZB1eiHHn3g
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4c33TSsF54bjZB1eiHHn3g
            source_type: api_record
            title: 中国历代人物传记资料库：王得雄（CBDB 224125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224125&o=json
            external_identifier: CBDB:224125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oxN22cLhWgB5VUPBzRfa6s
        status: active
        display_name: 王得雄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| birth.date | 1561年 | accepted |
| bio.summary | 王政（生于1561年），明人物。萬曆十一年進士，籍贯孝義，入仕進士。（中国历代人物传记资料库 CBDB 206851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cieoMVnBzJB9M1g8jnDdbx | 王廷言 | accepted |
| ancestors | p_3e6sK146UAQHvzkeM4nnKp | 王寧 | accepted |
| ancestors | p_oxN22cLhWgB5VUPBzRfa6s | 王得雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得雄（CBDB 224125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224125&o=json)
- [中国历代人物传记资料库：王寧（CBDB 224127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224127&o=json)
- [中国历代人物传记资料库：王廷言（CBDB 224128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224128&o=json)
- [中国历代人物传记资料库：王政（CBDB 206851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206851&o=json)
