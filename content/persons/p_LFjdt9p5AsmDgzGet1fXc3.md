---
schema: wang-person/v1
id: p_LFjdt9p5AsmDgzGet1fXc3
status: active
merged_into: null
display_name: 王广渊
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uVk2wFZ4RtvWxEieiJDF5o
        subject_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王广渊，宋人物。CBDB 记录其籍贯记录为洹水，身份包括王安石新法支持者，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1844 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HDHxZAgrcwtqj1VhVFKdbh
          claim_id: c_uVk2wFZ4RtvWxEieiJDF5o
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_T6H6sPc3RUeyvZvXaoJNdt
            source_type: api_record
            title: 维基数据：王广渊（Q45359566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359566
            external_identifier: Q45359566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_0cUBVph3Vovv_Y83KTyjUA
          claim_id: c_uVk2wFZ4RtvWxEieiJDF5o
          source_id: s_QjoVfXquRF7d1NQKdvr5zA
          stance: supports
          locator: CBDB:1844
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QjoVfXquRF7d1NQKdvr5zA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣淵（1844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1844&o=json
            external_identifier: CBDB:1844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.622Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CyPzzywz1UYrbKg6S3y4r9
        subject_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王广渊
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XUJKNdHghe7xN9Dt6hNo7Y
          claim_id: c_CyPzzywz1UYrbKg6S3y4r9
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: Q45359566
          quotation: null
          interpretation_note: null
          source:
            id: s_T6H6sPc3RUeyvZvXaoJNdt
            source_type: api_record
            title: 维基数据：王广渊（Q45359566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359566
            external_identifier: Q45359566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_pKqUwhELJnG6UFahK9888n
          claim_id: c_CyPzzywz1UYrbKg6S3y4r9
          source_id: s_QjoVfXquRF7d1NQKdvr5zA
          stance: supports
          locator: Q45359566
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EwQ9omLi4zvL4GcpB4UnLB
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xymbWLJmY3XkbYD4jEzYfA
          claim_id: c_EwQ9omLi4zvL4GcpB4UnLB
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_jKXJkJ1TnTJjXXFiHkv8J6
          claim_id: c_EwQ9omLi4zvL4GcpB4UnLB
          source_id: s_hfGnqqkZu2ykMbrGScDYiC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hfGnqqkZu2ykMbrGScDYiC
            source_type: api_record
            title: 维基数据：王师颜（Q45402112）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402112
            external_identifier: Q45402112
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
  children:
    - claim:
        id: c_aesVL5Rnd2ddpmT1ENKbJp
        subject_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xkR2JVaQE9hnma1HpccwBd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UEUPWgDYQSSSjL92Xm37Jm
          claim_id: c_aesVL5Rnd2ddpmT1ENKbJp
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_b2BtetDmsNFSesKf8PY8ar
          claim_id: c_aesVL5Rnd2ddpmT1ENKbJp
          source_id: s_LLGGHBZDikRCDoCwrZZbXN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LLGGHBZDikRCDoCwrZZbXN
            source_type: api_record
            title: 维基数据：王得君（Q45359707）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359707
            external_identifier: Q45359707
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_4qQE7gNibCuoqJJ6YEfLG8
          claim_id: c_aesVL5Rnd2ddpmT1ENKbJp
          source_id: s_QjoVfXquRF7d1NQKdvr5zA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_xkR2JVaQE9hnma1HpccwBd
        status: active
        display_name: 王得君
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王广渊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王广渊，宋人物。CBDB 记录其籍贯记录为洹水，身份包括王安石新法支持者，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 1844 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王广渊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |
| children | p_xkR2JVaQE9hnma1HpccwBd | 王得君 | accepted |

## 外部来源

- [维基数据：王得君（Q45359707）](https://www.wikidata.org/wiki/Q45359707)
- [维基数据：王广渊（Q45359566）](https://www.wikidata.org/wiki/Q45359566)
- [维基数据：王师颜（Q45402112）](https://www.wikidata.org/wiki/Q45402112)
- [CBDB 中国历代人物传记资料库：王廣淵（1844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1844&o=json)
